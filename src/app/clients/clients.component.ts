import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';   
import { Client } from '../models/client.model';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-clients',
  standalone: true,           
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
  imports: [CommonModule, FormsModule]
})
export class ClientsComponent {

  clients: Client[] = [];
  id!: number;
  nom!: string;
  editMode = false;

  constructor(private cs: ClientService) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.cs.getAll().then(d => this.clients = d);
  }

  save() {
  if (!this.nom) return;

  if (this.editMode) {
    // UPDATE → id obligatoire
    let c = new Client(this.id, this.nom);
    this.cs.update(c).then(() => this.load());
  } else {
    // ADD → SANS ID
    this.cs.add({ nomClient: this.nom }).then(() => this.load());
  }

  this.reset();
}


  edit(c: Client) {
  this.id = c.idClient!;     // ⬅️ ! = non null
  this.nom = c.nomClient!;   // ⬅️ ! = non null
  this.editMode = true;
}


  delete(id: number) {
    this.cs.delete(id).then(() => this.load());
  }

  reset() {
    this.id = 0;
    this.nom = '';
    this.editMode = false;
  }
}
