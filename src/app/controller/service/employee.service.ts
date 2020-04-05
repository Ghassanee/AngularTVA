import { Injectable } from '@angular/core';
import { Employee } from '../model/employee.model';
import { HttpClient } from '@angular/common/http';
import { Societe } from '../model/societe.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _employe: Employee;
  private _employes: Array<Employee>;
  private _url = 'http://localhost:8090/impot/employe/';


  constructor(private http: HttpClient) { }

  public save() {
    this.http.post<number>(this._url, this.employe).subscribe(
      data => {
        console.log(data);
          this.employes.push(this.cloneEmploye(this.employe));
          this.employe = null;
      }, eror => {
        console.log('eroro',eror);
      }
    );
  }

  public deleteByCin(employe: Employee) {
    this.http.delete<number>(this._url + 'delete/' + employe.cin).subscribe(
      data => {
  console.log('ha data' + data);
  this.deleteByCinFromView(employe);
      }, eror => {
        console.log('eroro');
      }
    );

  }

  public deleteByCinFromView(employe: Employee) {
    const index = this.employes.findIndex(s => s.cin === employe.cin);
    if (index !== -1) {
      this.employes.splice(index, 1);
    }
  }
  public findAll() {
    this.http.get<Array<Employee>>(this._url).subscribe(
      data => {
        console.log('ha data' + data);
        this._employes = data ;
      }, eror => {
        console.log('eroro',eror);
      }
    );

  }

  public findByCin(employe: Employee) {
    this.http.get<Employee>(this._url + 'cin/' + employe.cin) .subscribe(
      data => {
        this.employe = data ;
      },eror=>{
        console.log('erreur de find par cin ',eror);
      }
    );

  }

  public findBySociete(employe: Employee, societe: Societe) {
    this.http.get<Array<Employee>>(this._url + 'societe/' + societe.ref) .subscribe(
      data => {
        this.employes = data ;
      },eror=>{
        console.log('erreur de find par societe',eror);
      }
    );

  }
  get employe(): Employee {
    if (this._employe == null) {
      this._employe = new Employee();
    }
    return this._employe;
  }

  set employe(value: Employee) {
    this._employe = value;
  }

  get employes(): Array<Employee> {
    if (this._employes == null) {
      this._employes = new Array<Employee>();
    }
    return this._employes;
  }

  set employes(value: Array<Employee>) {
    this._employes = value;
  }

  private cloneEmploye(employe: Employee): Employee {
    const myClone = new Employee() ;
    myClone.id = employe.id ;
   myClone.societe = employe.societe;
    myClone.sexe=employe.sexe;
    myClone.salaire=employe.salaire;
    myClone.prime = employe.prime;
    myClone.prenom=employe.prenom;
    myClone.nom=employe.nom;
    myClone.cin=employe.cin;
    myClone.adresseMail = employe.adresseMail;
    myClone.adresseHabit = employe.adresseHabit;
    return myClone;
    }

}
