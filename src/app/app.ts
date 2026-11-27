import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Home } from './components/home/home';
import { Footer } from './components/footer/footer';

@Component({
  imports: [RouterOutlet, Header, Footer, Home],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  //protected readonly title = signal('Proyecto1');
  titulo: string = 'Hola Mundo';
}
