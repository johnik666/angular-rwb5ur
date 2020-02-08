import { Component, Input } from '@angular/core';

@Component({
  selector: 'Temperature',
  template: `<h1> {{temp}} </h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class TempComponent  {
  @Input() temp: string;
}