import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-porperty.component.html',
  styleUrls: ['./input-porperty.component.css'],
  // inputs: ['nomeDoCurso:nome'] // igual ao @Input('nome')
})
export class InputPorpertyComponent implements OnInit {

  @Input('nome') 
  nomeDoCurso: string = '';


  constructor() { }

  ngOnInit(): void {
  }

}
