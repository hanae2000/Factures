import { Produit } from "./produit.model";

export class LigneCmd {
    constructor(
        public produit: Produit,
        public quantite: number
    ){}

    get total() {
        return Number(this.produit.prixProduit) * Number(this.quantite);
    }
}
