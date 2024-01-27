import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from "../../../shared/services/data.service";
import {ActivatedRoute} from "@angular/router";
import {interval, Observable, Subscription} from "rxjs";
import {GraphComponent} from "../../../batch-info/batch-info/graph/graph.component";

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrl: './control.component.css'
})

export class ControlComponent {
  private socket!: WebSocket;
  private chartWriter!: Subscription;
  private batchId!: string;
  public color!: string;
  public show: boolean = false

  @ViewChild('graph1') graph1!: GraphComponent;
  @ViewChild('graph2') graph2!: GraphComponent;

  chartData: { x: number; y: number; }[] = [];
  chartData2: { x: number; y: number; }[] = [];

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {
  }

  createChartData(){
    this.dataService.getTimeRecordings(this.batchId).subscribe(timeRecordings => {
      this.color = timeRecordings[0].colour
      this.chartData = []
      timeRecordings.forEach(timeRecording => this.chartData.push({
        x: timeRecording.timeRecordingWithBatches.time,
        y: timeRecording.temperature
      }));
      timeRecordings.forEach(timeRecording => this.chartData2.push({
        x: timeRecording.timeRecordingWithBatches.time,
        y: timeRecording.viscosity
      }));
      this.chartData2 = []
      this.graph1.render();
      this.graph2.render();
    })
  }

  on():void {
    this.show = true;
    // @ts-ignore
    this.dataService.getIpAdress(this.route.snapshot.paramMap.get('id2')).subscribe( serverIp =>{
      this.socket = new WebSocket("ws://"+serverIp+":1234");
      this.socket.addEventListener("message", (message) =>{
        this.batchId = message.data
      })
      this.socket.addEventListener("open", (event) => {
        this.socket.send("on");
        this.chartWriter = interval(3000)
          .subscribe((val) => {this.createChartData();});
        })
      });
  }

  off():void {
    this.socket.send("off")
    this.chartWriter.unsubscribe();
  }
}
