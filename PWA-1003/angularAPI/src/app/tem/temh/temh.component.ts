import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-temh',
  standalone: true,
  imports: [],
  templateUrl: './temh.component.html',
  styles: ``
})
export class TemhComponent {

  @Input() mensaje:string=''
}
