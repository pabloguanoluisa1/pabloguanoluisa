import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
//clase para efiltrar la tabla o buscar pokemon
export class FilterPipe implements PipeTransform {

  transform(value: any=[], args: any): any {
    const resultPosts =[];
    
    for(const elementos of value)
    {
      if(( ((elementos.name == args)||(elementos.name.toLowerCase().indexOf(args.toLowerCase()) > -1))||
      ( (elementos.attack == args)) || ((elementos.defense== args)) )){
        resultPosts.push(elementos);
      };
    };
    return resultPosts;
  }


}
