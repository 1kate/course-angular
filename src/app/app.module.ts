import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlacesComponent } from './places/places.component';
import { SocialComponent } from './social/social.component';
import { WeatherComponent } from './weather/weather.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlacesPipe } from './places/places.pipe';
import { SharedModule } from './shared.module';
import { PhonePipe } from './places/phone.pipe';
@NgModule({
  declarations: [
    AppComponent,
    PlacesComponent,
    SocialComponent,
    WeatherComponent,
    PhonePipe,
    PlacesPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [PlacesPipe],
  bootstrap: [AppComponent] 
})
export class AppModule { }
