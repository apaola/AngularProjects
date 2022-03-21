import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  links = [
    { title: 'Inicio', fragment: 'one', link: '', icon: 'bi bi-grid-fill' },
    { title: 'Transacciones', fragment: 'two', link: 'transactions', icon: 'bi bi-bar-chart' },
    { title: 'Ingresos', fragment: 'three', link: 'budget/income', icon: 'bi bi-cash-coin' },
    { title: 'Gastos', fragment: 'four', link: 'budget/expense', icon: 'bi bi-wallet2' },
    { title: 'Categorías', fragment: 'five', link: 'category/list', icon: 'bi bi-back' }
  ];
  
  active = 'one';
  
}