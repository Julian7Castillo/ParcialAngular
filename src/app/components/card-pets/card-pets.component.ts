import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pets',
  standalone: true,
  imports: [],
  templateUrl: './card-pets.component.html',
  styleUrl: './card-pets.component.css'
})
export class CardPetsComponent {
  @Input() imagen:String=""
  @Input() nombre:String=""
  @Input() numero:String=""
  @Input() tipo:String=""
  @Input() genero:String=""
  @Input() raza:String=""
  @Input() edad:String=""
  @Input() color:String=""
  @Input() duenios:String=""
}
