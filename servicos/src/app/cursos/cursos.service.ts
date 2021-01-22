import { Injectable } from "@angular/core";

@Injectable()
export class CursosService {

    private cursos: Array<string> = ['Angular', 'Java', 'Node'];

    constructor(){
        console.log('CursosService');
    }

    getCursos(){
        return this.cursos;
    }

    addCurso( curso: string ){
        this.cursos.push(curso);
    }
}