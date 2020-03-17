import { Societe } from "./societe.model";

export class FactureCharge {
  nomFacture: String;
  numeroFacture: number;
  societe: Societe;
  dateFacturation: Date;
  datePaiement: Date;
  declarationTva: number;
  montantHT: number;
  montantTTC: number;
  tva: number;
  fournisseur : String;
}
