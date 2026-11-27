import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'; // Removido RouterLink del import de la librería
import { Frase } from '../../models/frase';
import { FraseService } from '../../service/frase-service';

@Component({
  imports: [FormsModule], // Removido RouterLink de la lista de imports
  selector: 'app-frase-form',
  styleUrl: './frase-form.css',
  templateUrl: './frase-form.html',
})
export class FraseForm {
  titulo: string = ' Frases Form';
  //laFrase: Frase =new Frase();
  laFrase = signal<Frase>(new Frase());
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private service = inject(FraseService);

  ngOnInit(): void {
    this.mostrarFrase();
  }
  mostrarFrase(): void {
    this.activatedRoute.params.subscribe(
      {
        next: (params) => {
          const id = params['id'];
          if (id){
            this.service.leerFrase(id).subscribe(
              {
               next:(laFraeObtenida) => {
                this.laFrase.set(laFraeObtenida);
               },
               error:(error) => console.error('Error al obtener la frase:', error)
              }
            );
          }
        }
      }
    );
  }
  
}
