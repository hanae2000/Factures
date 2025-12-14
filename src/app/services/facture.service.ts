import { Injectable } from '@angular/core';
import { Facture } from '../models/facture.model';
import { AppDB } from './db.service';

@Injectable({ providedIn: 'root' })
export class FactureService {
  private db = new AppDB();

  async add(f: Facture) {
    return this.db.factures.add(f); 
  }

  async getAll(): Promise<Facture[]> {
    return this.db.factures.toArray();
  }
}
