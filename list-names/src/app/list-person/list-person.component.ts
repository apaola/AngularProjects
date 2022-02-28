import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/Persona';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {

  public personas: Persona[] = [];
  public nombre: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  public agregar() {
    let persona: Persona = {
      id: 0,
      nombre: this.nombre,
      titulo: '',
      bio: ''
    };
    this.personas.push(persona);
  }

}
