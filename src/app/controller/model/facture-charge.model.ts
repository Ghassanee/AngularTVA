import { Societe } from './societe.model';

export class FactureCharge {
  public ref: string;
  public nomFacture: string;
  public numeroFacture: number;
  public societeRef: string;
  public dateFacturation: Date;
  public datePaiement: Date;
  public declarationRef: string;
  public montantHT: number;
  public montantTTC: number;
  public tva: number;
  public fournisseurCin: string;
}
