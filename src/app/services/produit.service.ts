import { Injectable } from '@angular/core';
import { AppDB } from './db.service';
import { Produit } from '../models/produit.model';

@Injectable({ providedIn: 'root' })
export class ProduitService {

  constructor(private db: AppDB) {}

  async add(p: Produit) {
    return await this.db.produits.add(p);
  }

  async update(p: Produit) {
    return await this.db.produits.put(p);
  }

  async delete(id: number) {
    return await this.db.produits.delete(id);
  }

  async getAll() {
    return await this.db.produits.toArray();
  }
}
