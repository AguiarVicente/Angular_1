import { Injectable, EventEmitter } from "@angular/core";

import { LogService } from './../shared/log.service';

@Injectable()
export class CursosService {

    emitirCursoCriado = new EventEmitter<string>();
    static criouNovoCurso = new EventEmitter<string>();

    private cursos: Array<string> = ['Angular', 'Java', 'Node'];

    constructor(private logService: LogService){
        console.log('CursosService');
    }

    getCursos(){
        this.logService.consoleLog('Obtendo Lista de cursos');
        return this.cursos;
    }

    addCurso( curso: string ){
        this.logService.consoleLog(`Criando um novo cursos ${curso}`);
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
        CursosService.criouNovoCurso.emit(curso);
    }
}