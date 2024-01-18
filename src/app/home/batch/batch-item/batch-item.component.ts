import { Component, Input } from '@angular/core';
import { Batch } from "../../../shared/models/batch.model";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons/faArrowRight";
import {DataService} from "../../../shared/services/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-batch-item',
  templateUrl: './batch-item.component.html',
  styleUrl: './batch-item.component.css'
})
export class BatchItemComponent {
  @Input()
  public batches!: Batch;
    protected readonly faArrowRight = faArrowRight;
}
