import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { ChartModule } from 'angular2-highcharts';
import * as highcharts from 'highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';

declare var require: any;

export function highchartsFactory() {
  const hc = require('highcharts');
  const dd = require('highcharts/modules/drilldown');
  dd(hc);

  return hc;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ChartModule,
    BrowserModule
  ],
  providers: [{
    provide: HighchartsStatic,
    useFactory: highchartsFactory
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
