import { Component} from '@angular/core';
import { Card } from '../../models/cads.mod';
import { CardAboutComponent } from "../../components/card-about/card-about.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CardAboutComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  cards:Card[] = [
    {
      imagen:"dog-2.jpg",
      titulo:"Adolpt a Dog"
    },
    {
      imagen:"cat-2.jpg",
      titulo:"Adolpt a Cat"
    },
    {
      imagen:"bird-2.jpg",
      titulo:"Adolpt a Bird"
    },
    {
      imagen:"cat-2.jpg",
      titulo:"Adolpt a Cat"
    },
    {
      imagen:"bird-2.jpg",
      titulo:"Adolpt a bird"
    },
    {
      imagen:"dog-2.jpg",
      titulo:"Adolpt a Dog"
    }
  ]
}
