import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value.length > 40) {
      return value.substr(0, 41) + ' (..)';
    } else {
      return value;
    }
  }

}
