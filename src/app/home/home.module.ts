import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationComponent } from "./location/location.component";
import { RouterLink } from "@angular/router";
import { LocationItemComponent } from "./location/location-item/location-item.component";
import { MatExpansionModule } from "@angular/material/expansion";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { FrituurComponent } from "./frituur/frituur.component";
import { FrituurItemComponent } from "./frituur/frituur-item/frituur-item.component";
import { BatchComponent } from "./batch/batch.component";
import { BatchItemComponent } from "./batch/batch-item/batch-item.component";
import {ControlComponent} from "./batch/control/control.component";

@NgModule({
  declarations: [
    LocationComponent,
    LocationItemComponent,
    FrituurComponent,
    FrituurItemComponent,
    BatchComponent,
    BatchItemComponent,
    ControlComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    RouterLink,
    MatExpansionModule,
    FaIconComponent
  ]
})
export class HomeModule { }
