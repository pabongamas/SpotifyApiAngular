import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorByImage'
})
export class ColorByImagePipe implements PipeTransform {
 
  transform(value: string, ...args: unknown[]): unknown {
    var style=args[0];
    return style+":"+value;
    
  }

}
