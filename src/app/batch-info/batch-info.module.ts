import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BatchInfoComponent} from "./batch-info/batch-info.component";
import {GraphComponent} from "./batch-info/graph/graph.component";
@NgModule({
  declarations: [
    BatchInfoComponent,
    GraphComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GraphComponent
  ]
})
export class BatchInfoModule { }
