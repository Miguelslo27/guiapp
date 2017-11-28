import { Component } from '@angular/core';
import { MapTypeStyle } from '@agm/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  lat = -34.751703;
  lng = -55.725607;
  zm = 14;
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
    console.log(navigator);

    if ("geolocation" in navigator) {
      navigator.geolocation.watchPosition((position) => {
        // this.lat = position.coords.latitude;
        // this.lng ¡ position.coords.longitude;
      });
    } else {
      /* geolocaiton IS NOT available */
    }
  }
}
