import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  latitude: any;
  longitude: any;
  home() {
    window.location.assign('geniuscodes132.blogspot.com');
  }
  
  constructor() {
    window.navigator.geolocation.getCurrentPosition(showPosition);
  }

  function showPosition(pos) {
    lat:any = pos.coords.latitude;
    long:any = pos.coords.longitude;

    alert(lat+" , "+long);
  }

}
