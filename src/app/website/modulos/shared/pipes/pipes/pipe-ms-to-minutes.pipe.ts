import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeMsToMinutes'
})
export class PipeMsToMinutesPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    const minutes = Math.floor(value / 60000);
    const seconds = Math.floor((value % 60000) / 1000);
    const formattedTime = `${minutes}:${String(seconds).padStart(2, '0')}`;
    return formattedTime;
  }

}
