import { Component } from '@angular/core';
import { MenuOpcionesComponent } from "../menu-opciones/menu-opciones.component";
import { MenuRedesComponent } from "../menu-redes/menu-redes.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MenuOpcionesComponent, MenuRedesComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
