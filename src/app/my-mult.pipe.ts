import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult',
  standalone: true
})
export class MyMultPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    var multiplication : number = 0;
    multiplication = value * args[0];
    return multiplication;
  }

}
