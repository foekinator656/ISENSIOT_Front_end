import {Component, OnInit} from '@angular/core';

import { Batch } from "../../shared/models/batch.model";
import { DataService } from "../../shared/services/data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrl: './batch.component.css'
})
export class BatchComponent implements OnInit {
  batches: Batch[] = [];
  public frituurId: string | null = this.route.snapshot.paramMap.get('id');

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {  }

  ngOnInit(): void {
    this.dataService.getBatchesByCurrentFrituur(this.frituurId!)
      .subscribe(batches =>
        this.batches = batches
      );
  }
}
