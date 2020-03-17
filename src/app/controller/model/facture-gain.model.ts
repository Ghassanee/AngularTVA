import { Societe } from './societe.model';

export class FactureGain {
  nomFacture: String;
  numeroFacture: number;
  societe: Societe;
  dateFacturation: Date;
  datePaiement: Date;
  declarationTva: number;
  montantHT: number;
  montantTTC: number;
  tva: number;
  client : String;
}
