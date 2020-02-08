import { Component } from '@angular/core';

@Component({
  selector: 'app-read',
  template: `
    <input #newDate
          (keyup.enter)="addDate(newDate.value)"
          (blur)="addDate(newDate.value); newDate.value='' ">
    <button (click)="addDate(newDate.value)">Submit</button>
    <ul>
        <li *ngFor="let newDate of dates">
        {{newDate}}
        </li>
    </ul>
        
    <ul>
        <li *ngFor="let newDate of dates">
        {{dates}}
        </li>
    </ul>    
        
  `
})

export class Read {
  
dates = [];

  addDate(newDate: string) 
  {
    if (newDate) 
    { 
      this.dates.push(newDate);
    }
  }
}