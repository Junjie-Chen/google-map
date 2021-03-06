export interface Mappable {
  location: {
    latitude: number;
    longitude: number;
  };
  information(): string;
}

export class Map {
  private map: google.maps.Map;

  constructor(mapId: string) {
    this.map = new google.maps.Map(document.getElementById(mapId), {
      center: {
        lat: 0,
        lng: 0
      },
      zoom: 2
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.map,
      position: {
        lat: mappable.location.latitude,
        lng: mappable.location.longitude
      }
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.information()
      });

      infoWindow.open(this.map, marker);
    });
  }
}
