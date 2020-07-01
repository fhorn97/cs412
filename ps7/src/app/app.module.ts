import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QueryDisplayComponent } from './query-display/query-display.component';
import { QueryFormComponent } from './query-form/query-form.component';
import {FormsModule} from "@angular/forms";
import {AppService} from "./sharedFolder/app.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    QueryDisplayComponent,
    QueryFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AppService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
