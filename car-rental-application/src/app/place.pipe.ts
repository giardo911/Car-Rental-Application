import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'place'
})
export class PlacePipe implements PipeTransform {

  transform(list: any, value: any): any {
    console.log(value);
    if(list.length==0|| value === undefined ) {
<<<<<<< HEAD

=======
>>>>>>> 633f8a3f7814bda39d9b29c1e4cdbb4ba0368d12
      return list;
  }
  const resultArray =[];
    for (const item of list) {
      if(item['city']===value) {
          resultArray.push(item);
      }
    }
    return resultArray;
  }

}
