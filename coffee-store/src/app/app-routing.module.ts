import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Contacts } from './contacts/contacts.component';
import { Wildcard } from './wildcard/wildcard.component';
import { UserAgreement } from './user-agreement/user-agreement.component';

const routes: Routes = [
  {path: '', component: Home},
  {path: 'contacts', component: Contacts},
  {path: 'user-agreement', component: UserAgreement},
  {path: '**', component: Wildcard}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
