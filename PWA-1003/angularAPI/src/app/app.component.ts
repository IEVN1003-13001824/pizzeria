import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TempComponent } from "./tem/temp/temp.component";
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TempComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularAPI';
}
