import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-conversor',
  styleUrl: './conversor.css',
  templateUrl: './conversor.html',
})
export class Conversor {
  titulo: string = 'Conversor de Temperaturas';
  numeroUno: number = 0;
  resultado: number = 0;

  convertirACelsius(): void {
    this.resultado = (this.numeroUno - 32) * 5/9;
  }
}
