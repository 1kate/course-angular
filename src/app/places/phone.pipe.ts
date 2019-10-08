import { Pipe, PipeTransform } from '@angular/core'; 
@Pipe({
  name: 'phone',
  pure: false
})
export class PhonePipe implements PipeTransform {
  public phone: string;
  transform(phone: string){    
    this.phone = phone.toString(); 
    return "+" + this.phone.substr(0,2) +" (" + this.phone.substr(2,3) + ") " + this.phone.substr(5,3) + "-" + this.phone.substr(8,2) +  "-" + this.phone.substr(10,2); 
  }
}
