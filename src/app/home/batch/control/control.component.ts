import {Component, OnInit} from '@angular/core';
import {DataService} from "../../../shared/services/data.service";
import {ActivatedRoute} from "@angular/router";
import {TimeRecording} from "../../../shared/models/timeRecording.model";
import {interval, Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrl: './control.component.css'
})


export class ControlComponent implements OnInit{
  private socket!: WebSocket;
  private chartWriter!: Subscription;
  private batchId!: string;
  chartData: { x: number; y: number; }[] = [];
  chartData2: { x: number; y: number; }[] = [];

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {
  }

  createChartData(){
    // this.dataService.getTimeRecordings(this.batchId).subscribe(timeRecordings => {
    //   timeRecordings.forEach(timeRecording => this.chartData.push({
    //     x: timeRecording.timeRecordingWithBatches.time,
    //     y: timeRecording.temperature
    //   }))
    //   timeRecordings.forEach(timeRecording => this.chartData2.push({
    //     x: timeRecording.timeRecordingWithBatches.time,
    //     y: timeRecording.viscosity
    //   }))
    // })
  }

  ngOnInit(): void {

  }

// todo receive ID from angular and write to local variabel.
  on():void {
    // @ts-ignore
    this.dataService.getIpAdress(this.route.snapshot.paramMap.get('id2')).subscribe( data =>{
      this.socket = new WebSocket("ws://"+data+":1234");
      this.socket.addEventListener("open", (event) => {
        this.socket.send("on");
        this.chartWriter = interval(1000)
          .subscribe((val) => { this.createChartData();});
        })
      });
  }
  off():void {
    this.socket.send("off")
    this.chartWriter.unsubscribe();
  }

}
