import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Contacts } from './contacts/contacts.component';
import { Wildcard } from './wildcard/wildcard.component';

const routes: Routes = [
  {path: '', component: Home},
  {path: 'contacts', component: Contacts},
  {path: '**', component: Wildcard}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
