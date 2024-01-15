import {Component, OnInit} from '@angular/core';
import {DataService} from "../../shared/services/data.service";
import {ActivatedRoute} from "@angular/router";
import {TimeRecording} from "../../shared/models/timeRecording.model";
import {CanvasJS, CanvasJSChart} from "@canvasjs/angular-charts";

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


  ngOnInit(): void {
    this.chart= new CanvasJS.Chart("chart", {
      title: {
        text: "Adding & Updating dataPoints"
      },
      data: [
        {
          type: "spline",
          dataPoints: [
          ]
        }
      ]
    });
    this.dataService.getTimeRecordings(10).subscribe(timeRecordings =>
      this.createChartData(timeRecordings)
    );
  }

  createChartData(timeRecordings: TimeRecording[]){
    let chartData: { x: number; y: number; }[] = [];
    timeRecordings.forEach(timeRecording => chartData.push({x: timeRecording.timeRecordingWithBatches.time, y: timeRecording.temperature}))
    this.chart.options.data[0].dataPoints = chartData;
    this.chart.render();
  }

  chartOptions = {
    theme: "light2",
    animationEnabled: true,
    zoomEnabled: true,
    title: {
      text: "Temp data Test ISENSIOT"
    },
    data: [{
      type: "line",
      dataPoints: [
      ]
    }]
  }


}
