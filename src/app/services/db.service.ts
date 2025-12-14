import Dexie, { Table } from 'dexie';
import { Injectable } from '@angular/core';
import { Produit } from '../models/produit.model';
import { Client } from '../models/client.model';
import { Facture } from '../models/facture.model';

@Injectable({
  providedIn: 'root' // 🔥 IMPORTANT
})
export class AppDB extends Dexie {

  produits!: Table<Produit, number>;
  clients!: Table<Client, number>;
  factures!: Table<Facture, number>;

  constructor() {
    super('FacturationDB');

    this.version(1).stores({
      produits: '++idProduit',
      clients: '++idClient',
      factures: '++idFacture'
    });
  }
}
