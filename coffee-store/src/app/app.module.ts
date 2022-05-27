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
    Blog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
