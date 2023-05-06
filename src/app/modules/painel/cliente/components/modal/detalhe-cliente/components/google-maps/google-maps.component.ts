import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss']
})
export class GoogleMapsComponent {
  lat = -14.8619237;
  lng = -40.8445346;
  zoom: number = 15;
  label:string = '';
}
