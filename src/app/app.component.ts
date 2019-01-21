import { Component } from '@angular/core';
import * as AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PlasTick';

  ngOnInit(){
    console.log("ngOnInit");
    AOS.init();
    console.log("AOS initialized");
  }
}
