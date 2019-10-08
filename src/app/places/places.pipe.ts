import { Pipe, PipeTransform } from '@angular/core';
import { IPlace } from '../mock';
@Pipe({
  name: 'filter',
  pure: false
})
export class PlacesPipe implements PipeTransform {
 
  transform(places: IPlace[], selectedCity: string){   
    if (selectedCity) {  
    return places.filter((place: IPlace): boolean => place.type === selectedCity); 
    } 
    return places;
  }
 
}
