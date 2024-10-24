import { User } from "./User";
import { Company } from "./Company";

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
  
  addUserMarker(user: User): void {
    new google.maps.marker.AdvancedMarkerElement({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng,
      },
      title: "User"
    });
  }

  addCompanyMarker(company: Company): void {
    new google.maps.marker.AdvancedMarkerElement({
      map: this.googleMap,
      position: {
        lat: company.location.lat,
        lng: company.location.lng,
      },
      title: "Company"
    });
  }
}
