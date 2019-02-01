import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { ScatterChartComponent } from '../../src/app/components/charts/scatter-chart/scatter-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';


storiesOf('My Button', module)
    .add('with some emoji', () => ({
        component: ScatterChartComponent,
        moduleMetadata: {
            imports: [NgxChartsModule],
            schemas: [],

        
          }

    }))
    .add('with some emoji and action', () => ({
        component: ScatterChartComponent,
    }));