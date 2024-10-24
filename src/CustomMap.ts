import { User } from "./User";
import { Company } from "./Company";

interface Marker{
  location:{
    lat: number;
    lng: number;
  }
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    const divContainer = document.getElementById(divId);
    this.googleMap = new google.maps.Map(divContainer as HTMLElement, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
      mapId: "COMPANY_AND_USER_MAP"
    });
  }

  addMarker(marker: Marker): void {
    new google.maps.marker.AdvancedMarkerElement({
      map: this.googleMap,
      position: {
        lat: marker.location.lat,
        lng: marker.location.lng,
      },
      title: "Marker"
    });
  }
}