import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFlyPipe',
})
export class CanFlyPipe implements PipeTransform {

  transform(value: boolean, ): string {
    return value ? 'Vuela' : 'No vuela';
  }

}
