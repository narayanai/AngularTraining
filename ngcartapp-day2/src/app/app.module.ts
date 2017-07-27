import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import {ShoppingModule} from "./shopping/shopping.module";
import {HomeComponent, ListComponent, ManageProductComponent, NotFoundComponent} from "./router/route.component";
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent, HomeComponent, ListComponent, NotFoundComponent, ManageProductComponent
  ],
  imports: [
    BrowserModule, ShoppingModule, RouterModule.forRoot([
      {path:"",component:HomeComponent},
      {path:"list",component:ListComponent},
      {path:"manage",component:ManageProductComponent},
      {path:"**",component:NotFoundComponent}
    ]),HttpModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
