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
}
