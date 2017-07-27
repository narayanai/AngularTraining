import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import {ShoppingModule} from "./shopping/shopping.module";
import {HomeComponent, ListComponent, ManageProductComponent, NotFoundComponent} from "./router/route.component";
import {RouterModule} from "@angular/router";

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

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
