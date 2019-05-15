import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {enableProdMode} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EffectComponent } from './home/effect/effect.component';


// enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EffectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
