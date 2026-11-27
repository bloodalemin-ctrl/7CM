import {  inject, Service } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Frase } from '../models/frase';
import { Observable } from 'rxjs';

@Service()
export class FraseService {
    private urlEndpoint: string = 'http://localhost:8083/api/v1/frases/frases';
    private http = inject(HttpClient);
    private headers = new HttpHeaders(
        { 
            'Content-Type': 'application/json' 
        }
    );
    mostrarFrases(): Observable<Frase[]> {
        return this.http.get<Frase[]>(this.urlEndpoint);
    }
    leerFrase(id : number): Observable<Frase>{
        return this.http.get<Frase>(`${this.urlEndpoint}/${id}`);  
    }
    crearFrase(frase: Frase): Observable<Frase>{
        return this.http.post<Frase>(
            this.urlEndpoint, 
            frase, 
            {headers: this.headers});
    }
    eliminarFrase(id: number): Observable<void>{
        return this.http.delete<void>(`${this.urlEndpoint}/${id}`, {headers: this.headers});
    }
    actualizarFrase(frase: Frase): Observable<Frase>{
        return this.http.put<Frase>(
            `${this.urlEndpoint}/${frase.idFrase}`, 
            frase, 
            {headers: this.headers}
        )
    }
}
