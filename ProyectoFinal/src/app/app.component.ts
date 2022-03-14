import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  links = [
    { title: 'Inicio', fragment: 'one' },
    { title: 'Ahorros', fragment: 'two' }
  ];
  
  active = 'one';

  constructor(public route: ActivatedRoute) {}
  
}
