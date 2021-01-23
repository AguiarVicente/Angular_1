import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let values = value.split(' ');
    let result = '';
    for(let valores of values){
      result += this.capitalize(valores) + ' '; 
    }
    return result;
  }

  capitalize(value: string){
    return value.substr(0,1).toUpperCase() + value.substr(1).toLowerCase();
  }

}