import { Component, inject, OnInit, signal } from '@angular/core';
import { Frase } from '../../models/frase';
import Swal from 'sweetalert2';
import { FraseService } from '../../service/frase-service';
import { RouterLink } from '@angular/router';
@Component({
  imports: [RouterLink],
  selector: 'app-lista-de-frases',
  styleUrl: './lista-de-frases.css',
  templateUrl: './lista-de-frases.html',
})
export class ListaDeFrases implements OnInit {
  private fraseService = inject(FraseService);
  
  titulo: string = 'Lista de Frases';
  //listaFrases: Frase[] = [];
  listaFrases = signal<Frase[]>([]);

  ngOnInit(): void {
    this.cargarFrase();
  }

  private cargarFrase(): void {
    this.fraseService.mostrarFrases().subscribe(
      {
        next: (lasfrases) => {
          this.listaFrases.set(lasfrases);
        },
        error: (err) => console.log('Error al cargar todas las frases: ', err),
      }
    );
  }

  eliminarFrase(laFrase: Frase): void {
    this.fraseService.eliminarFrase(laFrase.idFrase).subscribe({
      next: () => {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
            this.cargarFrase();
      },
      error: (err) => {
        console.log('Error al cargar todas las frases: ', err);
        Swal.fire('Error',
          'No fue posible eliminar la frase: ' + laFrase.textoFrase,
          'error');
      }
    }
  )
  }
}
