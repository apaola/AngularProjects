import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../models/Persona';

@Component({
  selector: 'app-item-person',
  templateUrl: './item-person.component.html',
  styleUrls: ['./item-person.component.css']
})
export class ItemPersonComponent implements OnInit {

  @Input()
  public persona: Persona = {
    id: 0,
    nombre: "Alba",
    titulo: "",
    bio: ""
  };

  constructor() { }

  ngOnInit(): void {
  }

}
