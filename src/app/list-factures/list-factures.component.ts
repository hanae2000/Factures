import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactureService } from '../services/facture.service';
import { Facture } from '../models/facture.model';

@Component({
  selector: 'app-list-factures',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-factures.component.html',
  styleUrls: ['./list-factures.component.css']
})
export class ListFacturesComponent {
  factures: Facture[] = [];

  constructor(private fs: FactureService) {}

  ngOnInit() {
    this.loadFactures();
  }

  // Charger toutes les factures depuis la base
  async loadFactures() {
    this.factures = await this.fs.getAll();
  }

  // Calcul du total HT d'une facture
  getTotalLigne(facture: Facture): number {
  return facture.lignes.reduce((sum, l: any) => {
    return sum + (Number(l.produit.prixProduit) * Number(l.quantite));
  }, 0);
}

getTVA(facture: Facture): number {
  return this.getTotalLigne(facture) * 0.2;
}

getTTC(facture: Facture): number {
  return this.getTotalLigne(facture) * 1.2;
}

}
