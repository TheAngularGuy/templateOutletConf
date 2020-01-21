import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssetsListComponent } from './assets-list/assets-list.component';
import { PlaceOneComponent } from './place-one/place-one.component';
import { PlaceTwoComponent } from './place-two/place-two.component';

@NgModule({
  declarations: [
    AppComponent,
    AssetsListComponent,
    PlaceOneComponent,
    PlaceTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
