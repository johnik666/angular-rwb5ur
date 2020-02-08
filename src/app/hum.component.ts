import { Component, Input } from '@angular/core';

@Component({
  selector: 'Humidity',
  template: `<h1> {{hum}} </h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HumComponent  {
  @Input() hum: string;
}