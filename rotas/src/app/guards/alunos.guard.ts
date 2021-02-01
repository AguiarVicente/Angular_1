import { Observable, of } from 'rxjs';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosGuard implements CanActivateChild{

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean{

    console.log('AlunosGuard: Guarda de rota filha')

    if(state.url.includes('editar')){
      // alert('Usuário sem acesso');
      // return of(false);
    }
    return true;
  }

}
