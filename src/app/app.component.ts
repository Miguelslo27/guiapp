import { Component, ViewChild } from '@angular/core';
import { MapTypeStyle, AgmMap } from '@agm/core';
import { AgmMapStyes } from './app.mapstyles';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(AgmMap) agmMap: AgmMap;

  title: string = 'app';
  mapSettings: any = {
    lat: 0,
    lng: 0,
    zoom: 14,
    streetView: false
  };
  mapStyles: MapTypeStyle[] = AgmMapStyes;

  userLocation: any = {
    lat: 0,
    lng: 0
  };
  locations: any = [];
  selectedLocation: any;

  ngOnInit() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        // this.mapSettings.lat = this.userLocation.lat = position.coords.latitude;
        // this.mapSettings.lng = this.userLocation.lng = position.coords.longitude;

        this.mapSettings.lat = this.userLocation.lat = -34.7518171;
        this.mapSettings.lng = this.userLocation.lng = -55.725730500000004;
      }, () => console.log('Error gettiong current position.'));

      navigator.geolocation.watchPosition((position) => {
        console.log('Change position -->', position);
        // this.mapSettings.lat = this.userLocation.lat = position.coords.latitude;
        // this.mapSettings.lng = this.userLocation.lng = position.coords.longitude;

        this.mapSettings.lat = this.userLocation.lat = -34.7518171;
        this.mapSettings.lng = this.userLocation.lng = -55.725730500000004;
      }, () => console.log('Error gettiong current position.'));
    } else {
      /* geolocaiton IS NOT available */
    }

    this.loadLocations();
  }

  loadLocations() {
    this.locations = [
      {
        title: "Gloss Peluquería",
        description: "Peluquería Unisex, animate al cambio.",
        phone: "091 322 302",
        email: "mail@mail.com",
        webpage: "http://google.com",
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        schedules: [
          { day: "su", open: [] },
          { day: "mo", open: [] },
          { day: "tu", open: [] },
          { day: "we", open: [] },
          { day: "th", open: [] },
          { day: "fr", open: [] },
          { day: "sa", open: [] },
        ],
        profilePictureUrl: "https://scontent.fmvd3-1.fna.fbcdn.net/v/t1.0-9/21430308_327894687673109_7851292938888459039_n.jpg?oh=7a78e12e8e75a6bc7938847cb090efdb&oe=5A8D21C9",
        imageUrl: "https://scontent.fmvd3-1.fna.fbcdn.net/v/t1.0-9/19437398_293619854433926_3329266658155700074_n.png?oh=a0363980df4c633f4f1927d2eefa5fe1&oe=5A93799F",
        location: {
          address: "Diagonal 1 & C, Parque del Plata, Uruguay",
          lat: -34.764566,
          lng: -55.724720
        },
        categories: ["peluqueria", "peluqueria-unisex", "belleza", "cuidado-personal"],
        services: ["corte", "color", "claritos", "brushing", "peinados", "balayage", "podología", "depilación", "manicuría", "maquillaje"],
        facilities: ["aire acondicionado", "wifi"],
        openingDate: 0,
        dateCreated: 0,
        lastModified: 0
      },
      {
        title: "Mobile Supplies",
        description: "Todo para tu móbil.",
        phone: "091 322 302",
        email: "mail@mail.com",
        webpage: "http://google.com",
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        schedules: [
          { day: "su", open: [] },
          { day: "mo", open: [] },
          { day: "tu", open: [] },
          { day: "we", open: [] },
          { day: "th", open: [] },
          { day: "fr", open: [] },
          { day: "sa", open: [] },
        ],
        profilePictureUrl: "https://scontent.fmvd3-1.fna.fbcdn.net/v/t1.0-9/14199662_334296080239217_1746760409949463613_n.png?oh=4079f433af4ee22471094dbfd6e09b1b&oe=5A9D4FC9",
        imageUrl: "https://scontent.fmvd3-1.fna.fbcdn.net/v/t1.0-9/14183868_334261870242638_7683957805114582291_n.jpg?oh=7c8dc4cc0d710cc4d0feba947a643e13&oe=5A9DA1AA",
        location: {
          address: "Ferreira & 8, Parque del Plata, Uruguay",
          lat: -34.767194,
          lng: -55.722324
        },
        categories: ["tecnología", "celulares", "electrónica", "tienda"],
        services: ["venta", "ascesoramiento", "capacitación", "reparación"],
        facilities: ["aire acondicionado", "wifi"],
        openingDate: 0,
        dateCreated: 0,
        lastModified: 0
      }
    ];
  }

  displayLocationInfo(location) {
    this.selectedLocation = location;
    this.agmMap.triggerResize(true);
  }

  undisplayLocationInfo() {
    this.selectedLocation = null;
    this.agmMap.triggerResize(true);
  }
}
