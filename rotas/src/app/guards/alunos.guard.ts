import { Observable, of } from 'rxjs';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AlunosGuard implements CanActivateChild{

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean{

    console.log('Alunos guarda')

    if(state.url.includes('editar')){
      // alert('Usuário sem acesso');
      // return of(false);
    }
    return true;
  }

}
