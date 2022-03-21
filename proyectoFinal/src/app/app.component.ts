import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  links = [
    { title: 'Inicio', fragment: 'one', link: '' },
    { title: 'Transacciones', fragment: 'two', link: 'transactions' },
    { title: 'Ingresos', fragment: 'three', link: 'budget/income' },
    { title: 'Gastos', fragment: 'four', link: 'budget/expense' },
    { title: 'Categorías', fragment: 'five', link: 'category/list' }
  ];
  
  active = 'one';
}
