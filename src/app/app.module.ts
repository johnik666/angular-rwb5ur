import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DateComponent } from './date.component';
import { HumComponent } from './hum.component';
import { TempComponent } from './temp.component';
import { HistDateComponent } from './hist-date/hist-date.component';
import { Read } from './submit/submit.component';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule ],
  declarations: [ AppComponent, DateComponent, Read ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
