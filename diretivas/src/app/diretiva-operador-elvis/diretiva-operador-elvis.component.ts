import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-operador-elvis',
  templateUrl: './diretiva-operador-elvis.component.html',
  styleUrls: ['./diretiva-operador-elvis.component.css']
})
export class DiretivaOperadorElvisComponent implements OnInit {

  tarefa: any = {
    desc: 'Descrição da tarefa',
    responsavel: null
    // responsavel : {nome: 'Nil}
  }

  constructor() { }

  ngOnInit(): void {
  }

}
