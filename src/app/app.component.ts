import { Component, Output } from '@angular/core';
import { IPlace, ISocial, IWeather } from './mock';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public place: IPlace[]; 
  @Output() weather: IWeather;
  @Output() social: ISocial;

  public output($event):void {
    this.weather = $event.weather;
    this.social = $event.social_info;
  }
}
