import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SimpleChart-AppE';

  Highcharts = Highcharts;
  chartOptions = {
    series: [{
      data: [2.0, 3.4, 4.3, 2.5, 6.8, 4.2]
    }]
  };


}
