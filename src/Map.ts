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
  }
}
