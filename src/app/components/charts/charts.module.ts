import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ScatterChartComponent } from './scatter-chart/scatter-chart.component';

@NgModule({
  declarations: [
    ScatterChartComponent
  ],
  imports: [
    CommonModule,
    NgxChartsModule
  ],
  exports: [
    ScatterChartComponent
  ]
})
export class ChartsModule { }
