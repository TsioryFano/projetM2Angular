import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sesamienMentionColor'
})
export class SesamienMentionColorPipe implements PipeTransform {

transform(mention: string): string {
  let color: string;

  switch(mention){
    case'S':
      color ='red lighten-1';
      break;
    case'L':
      color ='deep-purple darken-2';
      break;
    default:
      color ='grey';
      break;
  }
    return 'chip ' + color;
}

}
