import {Component, Input, OnInit} from '@angular/core';
import {CanvasJS} from "@canvasjs/angular-charts";

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.css'
})
export class GraphComponent implements OnInit {
  chart: any;

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.test();
  }

  async test(): Promise<void>{
    await new Promise(f => setTimeout(f, 800));
    this.chart= new CanvasJS.Chart(this.name, {
      axisX: {
        display: true,
        title: this.xName
      },
      axisY: {
        display: true,
        title: this.yName
      },
      zoomEnabled: true,
      title: {
        text: this.name
      },
      data: [
        {
          type: "spline",
          xValueFormatString: "(seconden)",
          dataPoints: this.datapoints
        }
      ]
    });
    this.chart.render();
  }


}
