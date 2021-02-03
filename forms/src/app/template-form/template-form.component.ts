import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: 'Nil',
    email: 'nil@nil.com'
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: any){
    console.log(form.value);
    console.log(this.usuario)
  }

}
