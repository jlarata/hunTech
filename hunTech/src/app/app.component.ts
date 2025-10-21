import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterModule, RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hunTech';
}
