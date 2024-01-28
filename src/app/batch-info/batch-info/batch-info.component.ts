import {Component, OnInit, ViewChild} from '@angular/core';
import { DataService } from "../../shared/services/data.service";
import { TimeRecording } from "../../shared/models/timeRecording.model";
import { ActivatedRoute, Router } from "@angular/router";
import {GraphComponent} from "./graph/graph.component";

@Component({
  selector: 'app-batch-info',
  templateUrl: './batch-info.component.html',
  styleUrl: './batch-info.component.css'
})
export class BatchInfoComponent implements OnInit {

  chartData: { x: number; y: number; }[] = [];
  chartData2: { x: number; y: number; }[] = [];
  public batchId: string | null = this.route.snapshot.paramMap.get('id3');

  @ViewChild('graph1') graph1!: GraphComponent;
  @ViewChild('graph2') graph2!: GraphComponent;

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  createChartData(timeRecordings: TimeRecording[]){
    timeRecordings.forEach(timeRecording => this.chartData.push({x: timeRecording.timeRecordingWithBatches.time, y: timeRecording.temperature}))
    timeRecordings.forEach(timeRecording => this.chartData2.push({x: timeRecording.timeRecordingWithBatches.time, y: timeRecording.viscosity}))
    this.graph1.render()
    this.graph2.render()
  }

  ngOnInit() {
    this.dataService.getTimeRecordings(this.batchId!).subscribe(timeRecordings =>
      this.createChartData(timeRecordings)
    );
  }

  goBack(){
    let strings: string[] = this.router.url.split("/");
    let url: string[] = ["/"+strings[1]+"/"+strings[2]+"/"+strings[3]]
    this.router.navigate(url)
  }
}
