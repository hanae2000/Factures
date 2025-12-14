import { Client } from "./client.model";
import { LigneCmd } from "./LigneCmd.model";

export class Facture {
    constructor(
        public idFacture: undefined,
        public dateFacture: Date,
        public client: Client,
        public lignes: LigneCmd[] = []   
    ){}

    get totalHT(){
        return this.lignes.reduce((acc, ligne) => acc + ligne.total, 0);
    }

    get tva(){
        return this.totalHT * 0.2;
    }

    get ttc(){
        return this.totalHT + this.tva;
    }
}
