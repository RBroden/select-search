import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { FormOneComponent } from './forms/form-one.component';
import { FormTwoComponent } from './forms/form-two.component';

import { ClickOutsideDirective } from './shared/directives/click-outside.directive';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    FormOneComponent,
    FormTwoComponent,
    ClickOutsideDirective
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
