import faker from 'faker';
import { Mappable } from './Map';

export class User implements Mappable {
  name: string;
  location: {
    latitude: number;
    longitude: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      latitude: parseFloat(faker.address.latitude()),
      longitude: parseFloat(faker.address.longitude())
    };
  }

  information(): string {
    return `User: ${this.name}`;
  }
}
