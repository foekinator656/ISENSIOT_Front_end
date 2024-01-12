import { Component, Input } from '@angular/core';
import { Batch } from "../../../shared/models/batch.model";

@Component({
  selector: 'app-batch-item',
  templateUrl: './batch-item.component.html',
  styleUrl: './batch-item.component.css'
})
export class BatchItemComponent {
  @Input()
  public batches!: Batch;
}
