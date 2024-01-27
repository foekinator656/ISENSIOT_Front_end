import {Component, Input, OnInit} from '@angular/core';
import {CanvasJS} from "@canvasjs/angular-charts";

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.css'
})
export class GraphComponent {
  chart: any;

  @Input()
  public datapoints!: { x: number; y: number; }[];
  @Input()
  public name!: String;
  @Input()
  public xName!: String;
  @Input()
  public yName!: String;

  initChart(){
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
  }

  render(){
    if(this.chart==undefined){
      this.initChart()
    }

    this.chart.options.data[0].dataPoints = this.datapoints
    this.chart.render()
  }
}
