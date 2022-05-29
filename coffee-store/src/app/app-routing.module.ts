import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Contacts } from './contacts/contacts.component';
import { Wildcard } from './wildcard/wildcard.component';
import { UserAgreement } from './user-agreement/user-agreement.component';
import { Blog } from './blog/blog.component';
import { CezveComponent } from './blog/cezve/cezve.component';
import { FrenchPressComponent } from './blog/french-press/french-press.component';
import { CoffeemakerComponent } from './blog/coffeemaker/coffeemaker.component';
import { MokaPotComponent } from './blog/moka-pot/moka-pot.component';
import { EspressoMachineComponent } from './blog/espresso-machine/espresso-machine.component';
import { BrewedCoffeeComponent } from './blog/brewed-coffee/brewed-coffee.component';
import { AeroPressComponent } from './blog/aero-press/aero-press.component';
import { UsialCupComponent } from './blog/usial-cup/usial-cup.component';

const routes: Routes = [
  {path: '', component: Home},
  {path: 'contacts', component: Contacts},
  {path: 'blog', component: Blog,
    children: [
      {path: '', component: CezveComponent},
      {path: 'french-press', component: FrenchPressComponent},
      {path: 'moka-pot', component: MokaPotComponent},
      {path: 'espresso-machine', component: EspressoMachineComponent},
      {path: 'brewed-coffee', component: BrewedCoffeeComponent},
      {path: 'aero-press', component: AeroPressComponent},
      {path: 'usial-cup', component: UsialCupComponent},
      {path: 'coffeemaker', component: CoffeemakerComponent}
    ]},
  {path: 'user-agreement', component: UserAgreement},
  {path: '**', component: Wildcard}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
