import { Component } from '@angular/core';
import { TemhComponent } from "../temh/temh.component";

@Component({
  selector: 'app-temp',
  standalone: true,
  imports: [TemhComponent],
  templateUrl: './temp.component.html',
  styles: ``
})
export class TempComponent {
  title="Saludo desde el componente padre"
}
