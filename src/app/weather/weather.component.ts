import { Component, Input } from '@angular/core';
import { IWeather } from '../mock';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  @Input()
  weather: IWeather;
}
