import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LigneCmd } from '../models/LigneCmd.model';
import { ProduitService } from '../services/produit.service';
import { ClientService } from '../services/client.service';
import { Facture } from '../models/facture.model';
import { FactureService } from '../services/facture.service';

@Component({
  selector: 'app-factures',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrls: ['./facture.component.css'],
  templateUrl: './facture.component.html'
})
export class FacturesComponent {

  clients: any[] = [];
  products: any[] = [];
  lignes: LigneCmd[] = [];

  selectedClient: any;
  selectedProduct: any;
  quantite: number = 1;

  selectedDate: Date = new Date();  

  constructor(
    private ps: ProduitService,
    private cs: ClientService,
    private fs: FactureService
  ) {}

  ngOnInit() {
    this.ps.getAll().then(data => this.products = data);
    this.cs.getAll().then(data => this.clients = data);
  }

  addLine() {
    if (!this.selectedProduct || this.quantite < 1) return;
    this.lignes.push(new LigneCmd(this.selectedProduct, this.quantite));
  }

  removeLine(i: number) {
    this.lignes.splice(i, 1);
  }

  get totalHT() {
    return this.lignes.reduce((s, l) => s + l.total, 0);
  }

  get tva() {
    return this.totalHT * 0.20;
  }

  get ttc() {
    return this.totalHT + this.tva;
  }

  async saveFacture() {
  if (!this.selectedClient || this.lignes.length === 0) {
    alert("Veuillez choisir un client et ajouter au moins une ligne !");
    return;
  }


  const f = new Facture(
    undefined,
    this.selectedDate,
    this.selectedClient,
    this.lignes
  );

  await this.fs.add(f);

  
  alert("Facture enregistrée avec succès !");

  
  this.lignes = [];
  this.selectedClient = null;
  this.selectedProduct = null;
  this.quantite = 1;
  this.selectedDate = new Date(); 
}

}
