import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from 'app.component';
import { DateComponent } from './date.component';
import { HumComponent } from './hum.component';
import { TempComponent } from './temp.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, DateComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
