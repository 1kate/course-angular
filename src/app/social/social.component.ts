import { Component, Input } from '@angular/core';
import { ISocial } from '../mock';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent {
  @Input()
  public social: ISocial;
}
