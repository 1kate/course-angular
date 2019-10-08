import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { places, IPlace } from '../mock';
import { PlacesPipe } from './places.pipe';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {

  @Output() outputPlaces = new EventEmitter<IPlace>();

  constructor(private placeFilter: PlacesPipe) { }

  public places: IPlace[] = places;
  public cities = new Set(this.places.map(place => place.type));
  public selectedCity: string;

  public set selectedPlace(place: IPlace) {
    this.selectedPlacePr = place; 
    this.outputPlaces.emit(this.selectedPlacePr); 
  }
  
  public get selectedPlace(): IPlace {
    return this.selectedPlacePr;
  }
  
  private selectedPlacePr: IPlace;
 
  getPipePlace() { 
    return this.placeFilter.transform(places, this.selectedCity);
  }

  public selectCity(city: string) { 
    this.selectedCity = city;    
    this.selectedPlace = this.getPipePlace()[0];  
    this.places = this.getPipePlace();
  }

  public selectPlace(place: IPlace) { 
    this.selectedPlace = place; 
  }  

  ngOnInit(): void {  
     this.selectCity(places[0].type)
  } 
    
}
