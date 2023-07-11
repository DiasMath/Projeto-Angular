import { Component } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
  styleUrls: ['./primeiro-componente.component.css']
})
export class PrimeiroComponenteComponent {
    name : string = 'Matheus';
    age : number = 21;
    hobbies = ["jogar","pular","estudar"];
    job : string = "programador";
    car = {
      model : "Fiat",
      year : 2019
    }

}
