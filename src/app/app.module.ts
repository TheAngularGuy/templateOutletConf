import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssetsListComponent } from './components/assets-list/assets-list.component';
import { PlaceOneComponent } from './components/place-one/place-one.component';
import { PlaceTwoComponent } from './components/place-two/place-two.component';

@NgModule({
  declarations: [AppComponent, AssetsListComponent, PlaceOneComponent, PlaceTwoComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
