import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { ProduitsComponent } from './produits/produits.component';
import { FacturesComponent } from './facture/facture.component';
import { ListFacturesComponent } from './list-factures/list-factures.component';

export const routes: Routes = [
    { path: 'clients', component: ClientsComponent },
    { path: 'produits', component: ProduitsComponent },
    { path: 'factures', component: FacturesComponent },

    { path: 'list-factures', component: ListFacturesComponent },
    { path: '', redirectTo: 'factures', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }