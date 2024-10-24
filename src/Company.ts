import { faker } from "@faker-js/faker";
import { Marker } from './CustomMap';

export class Company implements Marker {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  getContent(): string {
    return `
      <div>
        <h4>Company name: <i>${this.companyName}</i></h4<br>
        <h5>Catch phrase: <i>${this.catchPhrase}</i></h5>
      </div>
    `;
  }
}