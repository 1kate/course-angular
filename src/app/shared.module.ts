import { NgModule } from '@angular/core';
import { MatCardModule, MatGridListModule, MatListModule } from '@angular/material';
import { ScrollingModule } from '@angular/cdk/scrolling'; 
@NgModule({
  exports: [
    MatCardModule,
    MatGridListModule, 
    ScrollingModule,
    MatListModule
  ] 
})
export class SharedModule { }