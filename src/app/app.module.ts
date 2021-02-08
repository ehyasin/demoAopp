import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewPpageComponent } from './new-ppage/new-ppage.component';
import { NewPageComponent } from './new-page/new-page.component';
import { NewPage3Component } from './new-page3/new-page3.component';

@NgModule({
  declarations: [
    AppComponent,
    NewPpageComponent,
    NewPageComponent,
    NewPage3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
