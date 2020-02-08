import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'hist-date-editor',
  templateUrl: './hist-date.component.html',
  styleUrls: ['./hist-date.component.css']
})
export class HistDateComponent {
  HistDate = new FormControl('');
}