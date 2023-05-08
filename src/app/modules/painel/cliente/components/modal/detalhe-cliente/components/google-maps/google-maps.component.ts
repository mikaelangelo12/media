import { Component, Input, OnInit, Output } from '@angular/core';
import { Geo } from 'src/app/shared/model/painel/cliente/cliente.model';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss']
})
export class GoogleMapsComponent implements OnInit {
  @Input() geo: Geo | any
  lat : any
  lng: any;
  zoom: number = 15;
  label:string = '';
  
  ngOnInit(): void {
    this.lat = parseFloat(this.geo.lat)
    this.lng = parseFloat(this.geo.lng)
  }
}
