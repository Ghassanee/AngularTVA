import { TypeSociete } from './type-societe.model';

export class Societe {

  public id : number;
  public nom : String;
  public ref: String;
  public adresse:String;
  public nbrEmployes:number;
  public capital:number;
  public typeSociete: TypeSociete;
}
