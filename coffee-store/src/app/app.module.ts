import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CatalogExplorer } from './home/catalog-explorer/catalog-explorer.component';
import { MainTitleComponent } from './home/main-title/main-title.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Home } from './home/home';
import { StrongQualities } from './home/strong-qualities/strong-qualities.component';
import { Contacts } from './contacts/contacts.component';
import { Wildcard } from './wildcard/wildcard.component';
import { Footer } from './footer/footer.component';
import { UserAgreement } from './user-agreement/user-agreement.component';
import { Blog } from './blog/blog.component';
import { CezveComponent } from './blog/cezve/cezve.component';
import { FrenchPressComponent } from './blog/french-press/french-press.component';
import { MokaPotComponent } from './blog/moka-pot/moka-pot.component';
import { EspressoMachineComponent } from './blog/espresso-machine/espresso-machine.component';
import { BrewedCoffeeComponent } from './blog/brewed-coffee/brewed-coffee.component';
import { AeroPressComponent } from './blog/aero-press/aero-press.component';
import { UsialCupComponent } from './blog/usial-cup/usial-cup.component';
import { CoffeemakerComponent } from './blog/coffeemaker/coffeemaker.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MainTitleComponent,
    CatalogExplorer,
    StrongQualities,
    Home,
    Contacts,
    Wildcard,
    Footer,
    UserAgreement,
    Blog,
    CezveComponent,
    FrenchPressComponent,
    MokaPotComponent,
    EspressoMachineComponent,
    BrewedCoffeeComponent,
    AeroPressComponent,
    UsialCupComponent,
    CoffeemakerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
