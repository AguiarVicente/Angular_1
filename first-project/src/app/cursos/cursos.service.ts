import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class CursosService {

  //http -> para conectar ao api externas

  constructor() { }

  getCursos(){
    return ['Java', 'Angular'];
  }
}
