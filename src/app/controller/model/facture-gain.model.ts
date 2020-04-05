import { Societe } from './societe.model';

export class FactureGain {
  // tslint:disable-next-line:ban-types
  ref: number;
  nomFacture: string;
  numeroFacture: number;
  dateFacturation: Date;
  datePaiement: Date;
  declarationTva: number;
  montantHT: number;
  montantTTC: number;
  tva: number;
  // tslint:disable-next-line:ban-types
  client: string;
  clientCne: string;
  societe: Societe;
  societeRef: Societe;
}
