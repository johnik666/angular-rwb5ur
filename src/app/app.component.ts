import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'LONDON';
  day = 'den';
  month = 'mesiac';
  year = 'rok';
  temp = 'teplota';
  hum = 'vlhkost';
}
