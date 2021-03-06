import { IFormCanDeactivate } from './../../guards/form-canDeactivate';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { AlunosService } from './../alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, OnDestroy, IFormCanDeactivate {

  aluno: any = {};
  inscricao: Subscription = new Subscription();
  private formMudou: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      ( params: any ) => {
        let id = params['id']
        this.aluno = this.alunosService.getAluno(id);

        if(this.aluno === null){
          this.aluno = {};
        }
      }
    )
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  onInput(){
    this.formMudou = true;
    console.log('Mudou')
  }

  podeMudarRota(){
  this.formMudou = confirm('Tem certeza que deseja sair dessa página?');

    if(this.formMudou){
      return true
    }else {
      return false
    }
  }

  podeDesativar(){
    return this.podeMudarRota();
  }

}
