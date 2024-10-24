export interface Marker {
  location: {
    lat: number;
    lng: number;
  };
  getContent(): string;
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
      mapId: "COMPANY_AND_USER_MAP",
    });
  }

  addMarker(marker: Marker): void {
    const mark = new google.maps.marker.AdvancedMarkerElement({
      map: this.googleMap,
      position: {
        lat: marker.location.lat,
        lng: marker.location.lng,
      },
      title: "Marker",
    });

    mark.addEventListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: marker.getContent(),
      });
      infoWindow.open(this.googleMap, mark);
    });
  }
}