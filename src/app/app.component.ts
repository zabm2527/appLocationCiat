import { Component } from "@angular/core";
import { ServicesApiRest } from "src/global-service/services";
declare const google: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  zoom: any = 12;
  center: any = {
    lat: 3.42158,
    lng: -76.5205,
  };
  arrCordinates: any = [];
  arrCattles: any = [];
  constructor(private serviceAR: ServicesApiRest) {
    this.serviceAR.getAllZonesDangerous().subscribe((data: any) => {
      this.arrCordinates = data;
    });

    this.serviceAR.getAllCattles().subscribe((data: any) => {
      this.arrCattles = data;
    });
  }
  onMapReady(map) {
    this.initDrawingManager(map);
  }
  initDrawingManager(map: any) {
    console.log(this.arrCattles);
    const polygons = [];
    this.arrCordinates.forEach((element) => {
      const polygonCoords = [];
      element.forEach((item) => {
        polygonCoords.push(new google.maps.LatLng(item.lat, item.lng));
      });
      const bounds = new google.maps.LatLngBounds();
      for (let i = 0; i < polygonCoords.length; i++) {
        bounds.extend(polygonCoords[i]);
      }
      polygons.push(
        new google.maps.Polygon({
          paths: element,
          strokeColor: "#FF0000",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: "#FF0000",
          fillOpacity: 0.35,
          title: "¡WARNING ZONE!",
          latlng: new google.maps.LatLng(
            bounds.getCenter().lat(),
            bounds.getCenter().lng()
          ),
          center_lat: bounds.getCenter().lat(),
          center_lng: bounds.getCenter().lng(),
        })
      );
    });
    polygons.forEach((element) => {
      element.setMap(map);
    });
  }
}
