import { Injectable } from "@angular/core";
import { TypeSociete } from "../model/type-societe.model";

@Injectable({
  providedIn: "root"
})
export class TypeSocieteService {
  private typeSoc: TypeSociete;
  private typeSocs: Array<TypeSociete>;

  public get $typeSocs(): Array<TypeSociete> {
    if(this.typeSocs == null){
      this.typeSocs = new Array<TypeSociete>();
    }
    return this.typeSocs;
  }
  public set $typeSocs(value: Array<TypeSociete>) {
    this.typeSocs = value;
  }

  public get $typeSoc(): TypeSociete {
    if(this.typeSoc == null){
      this.typeSoc = new TypeSociete();
    }
    return this.typeSoc;
  }

  public set $typeSoc(value: TypeSociete) {
    this.typeSoc = value;
  }
public add(){
  return this.typeSocs.push(this.clone(this.typeSoc));

}
public clone(e:TypeSociete): TypeSociete{
  const MyClone = new TypeSociete();
  MyClone.id = e.id;
  MyClone.libelle=e.libelle;
  return MyClone;
}
  constructor() {}
}
