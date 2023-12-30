import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd',
  standalone: true
})
export class MyAddPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    var addition : number = 0;
    addition = value + args[0];
    return addition;
  }

}
