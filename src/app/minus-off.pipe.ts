import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minusOff'
})
export class MinusOffPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value !== 0) {
      return Math.abs(value);
    } else {
      value = '';
    }
  }

}
