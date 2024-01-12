import { Component, OnInit } from '@angular/core';
import { DataService } from "../../shared/services/data.service";
import { Frituur } from "../../shared/models/frituur.model";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-frituur',
  templateUrl: './frituur.component.html',
  styleUrl: './frituur.component.css'
})
export class FrituurComponent implements OnInit {
  public frituurs: Frituur[] = [];
  public locationId: string | null = this.route.snapshot.paramMap.get('id');

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //@ts-ignore
    this.dataService.getFrituursByCurrentLocation(this.locationId)
      .subscribe(frituurs => this.frituurs = frituurs);
  }
}
