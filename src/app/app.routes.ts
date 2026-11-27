import { Routes } from '@angular/router';
import { Conversor } from './components/conversor/conversor';
import { Home } from './components/home/home';
import { ListaDeFrases } from './pages/lista-de-frases/lista-de-frases';
import { FraseForm } from './pages/frase-form/frase-form';

export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', component: Home},
    {path:'conversor', component: Conversor},
    {path:'listado', component:ListaDeFrases},
    {path:'frase-form', component:FraseForm},
    {path:'frase-form/:id', component:FraseForm},
    {path:'**', redirectTo:'home'}
];
