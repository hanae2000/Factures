import { Injectable } from '@angular/core';
import { AppDB } from './db.service';
import { Client } from '../models/client.model';

@Injectable({ providedIn: 'root' })
export class ClientService {

  constructor(private db: AppDB) {}

  async add(c: Client) {
    return await this.db.clients.add(c);
  }

  async update(c: Client) {
    return await this.db.clients.put(c);
  }

  async delete(id: number) {
    return await this.db.clients.delete(id);
  }

  async getAll() {
    return await this.db.clients.toArray();
  }
}
