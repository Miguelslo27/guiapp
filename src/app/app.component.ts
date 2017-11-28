import { Component } from '@angular/core';
import { MapTypeStyle } from '@agm/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'app';
  mapSettings: any = {
    lat: 0,
    lng: 0,
    zoom: 14,
    streetView: false
  };
  userLocation: any = {
    lat: 0,
    lng: 0
  }

  mapStyles: MapTypeStyle[] = [
    {
      elementType: 'all',
      featureType: 'all',
      stylers: [
        {
          // color: '#FF0000'
          // gamma?: number;
          // hue?: string;
          invert_lightness: true
          // lightness?: number;
          // saturation?: number;
          // visibility?: string;
          // weight?: number;
        }
      ]
    }
  ];

  ngOnInit() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.mapSettings.lat = this.userLocation.lat = position.coords.latitude;
        this.mapSettings.lng = this.userLocation.lng = position.coords.longitude;
      });
    } else {
      /* geolocaiton IS NOT available */
    }
  }
}
