import { Component, Input } from '@angular/core';

@Component({
  selector: 'Date',
  template: `<h1> {{day}}.{{month}}.{{year}} </h1>`,
  styles: [`h1 { font-family: Lato; }`]
})

export class DateComponent  {
  @Input() day: string;
  @Input() month: string;
  @Input() year: string;
}