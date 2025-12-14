import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Produit } from '../models/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produits',
  standalone: true,
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css'],
  imports: [CommonModule,FormsModule]
})
export class ProduitsComponent {

  products: Produit[] = [];

  idProduit!: number;
  nomProduit!: string;
  prixProduit!: number;

  editMode: boolean = false;

  constructor(private ps: ProduitService) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.ps.getAll().then(data => this.products = data);
  }

  save() {
    let p = new Produit(this.idProduit, this.nomProduit, this.prixProduit);

    if (this.editMode) {
      this.ps.update(p).then(() => this.load());
    } else {
      this.ps.add(p).then(() => this.load());
    }

    this.reset();
  }

  edit(p: Produit) {
    this.editMode = true;
    this.idProduit = p.idProduit!;
    this.nomProduit = p.nomProduit!;
    this.prixProduit = p.prixProduit!;
  }

  delete(id: number) {
    this.ps.delete(id).then(() => this.load());
  }

  reset() {
    this.editMode = false;
    this.idProduit = 0;
    this.nomProduit = '';
    this.prixProduit = 0;
  }
}
