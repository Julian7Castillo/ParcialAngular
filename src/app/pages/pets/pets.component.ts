import { CardPetsComponent } from "../../components/card-pets/card-pets.component";
import { Component} from '@angular/core';
import { Ped } from "../../models/card-peds";
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-pets',
  standalone: true,
  imports: [CardPetsComponent, HeaderComponent],
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.css'
})
export class PetsComponent {
  pets:Ped[] = [
    {
      imagen:"cat.jpg",
      nombre:"Fluffy Tigger",
      numero:"22043243",
      tipo:"Cat",
      genero:"Female",
      raza:"British Shorthair",
      edad:"3 years",
      color:"Gray/Brown",
      duenios:"Unknown"
    },
    {
      imagen:"dog.jpg",
      nombre:"Little Smokey",
      numero:"22043244",
      tipo:"Dog",
      genero:"Male",
      raza:"Terrier, Pit Bull/Mix",
      edad:"2 years",
      color:"Black/White",
      duenios:"Unknown"
    },
    {
      imagen:"dog-22.jpg",
      nombre:"Spotty",
      numero:"22043245",
      tipo:"Dog",
      genero:"Female",
      raza:"Female",
      edad:"3 years",
      color:"Brown/White",
      duenios:"Unknown"
    },
    {
      imagen:"cat.jpg",
      nombre:"Fluffy Tigger",
      numero:"22043243",
      tipo:"Cat",
      genero:"Female",
      raza:"British Shorthair",
      edad:"3 years",
      color:"Gray/Brown",
      duenios:"Unknown"
    },
    {
      imagen:"dog.jpg",
      nombre:"Little Smokey",
      numero:"22043244",
      tipo:"Dog",
      genero:"Male",
      raza:"Terrier, Pit Bull/Mix",
      edad:"2 years",
      color:"Black/White",
      duenios:"Unknown"
    },
    {
      imagen:"dog-22.jpg",
      nombre:"Spotty",
      numero:"22043245",
      tipo:"Dog",
      genero:"Female",
      raza:"Female",
      edad:"3 years",
      color:"Brown/White",
      duenios:"Unknown"
    }
  ]
}
