import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-about',
  standalone: true,
  imports: [],
  templateUrl: './card-about.component.html',
  styleUrl: './card-about.component.css'
})
export class CardAboutComponent {
  @Input() titulo:String=""
  @Input() imagen:String=""

}
