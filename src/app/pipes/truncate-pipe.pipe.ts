import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncatePipe'
})
export class TruncatePipe implements PipeTransform {

  transform(valor: string, limite: number, termino: string): String {
    return valor.length > limite ? valor.substring(0, limite) + termino : valor;
  }

}
