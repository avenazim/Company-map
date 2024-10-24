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
}