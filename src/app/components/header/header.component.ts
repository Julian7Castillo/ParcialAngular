import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuOpcionesComponent } from "../menu-opciones/menu-opciones.component";
import { MenuRedesComponent } from "../menu-redes/menu-redes.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, MenuOpcionesComponent, MenuRedesComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
