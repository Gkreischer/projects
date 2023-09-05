import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {provideClientHydration} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ShowImageComponent } from './components/show-image/show-image.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent]
})
export class AppModule { }
