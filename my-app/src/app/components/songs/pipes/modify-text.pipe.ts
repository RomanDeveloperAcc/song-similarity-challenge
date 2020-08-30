import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modifyText'
})
export class ModifyTextPipe implements PipeTransform {
  transform(value: any): any {
    if (value[0] === ',') {
      value = value.slice(1, value.length);
    }

    let tempArr = value.split('');
    tempArr = tempArr.map(elem => elem === ',' ? elem + '\n' : elem);
    value = tempArr.join('');

    return value;
  }
}
