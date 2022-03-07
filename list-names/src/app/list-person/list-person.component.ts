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
  public titulo: string = '';
  public bio: string = '';
  public id: number = 0;
  

  constructor() { }

  ngOnInit(): void {
  }

  public agregar() {
    let persona: Persona = {
      id: this.id,
      nombre: this.nombre,
      titulo: this.titulo,
      bio: this.bio
    };
    this.personas.push(persona);
  }

}
