import { Card } from './models/cads.mod';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutMainComponent } from "./layout/layout-main/layout-main.component";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutMainComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ParcialJulian';
}
