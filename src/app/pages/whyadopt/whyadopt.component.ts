import { Component } from '@angular/core';
import { CardWhyComponent } from "../../components/card-why/card-why.component";
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-whyadopt',
  standalone: true,
  imports: [CardWhyComponent, HeaderComponent],
  templateUrl: './whyadopt.component.html',
  styleUrl: './whyadopt.component.css'
})
export class WhyadoptComponent {

}
