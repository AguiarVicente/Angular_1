import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: Array<any> = [];
  pagina: number = 0;
  inscricao: Subscription = new Subscription();

  constructor(
    private cursosService: CursosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();

    this.inscricao = this.route.queryParams.subscribe( (queryParams) => {
      this.pagina = queryParams['pagina'];
    })
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  proximaPagina(){
    // this.pagina++;
    this.router.navigate(['/cursos'], {queryParams: {'pagina': ++this.pagina}})
  }

}
