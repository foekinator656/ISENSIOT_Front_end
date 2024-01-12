import { Component, OnInit } from '@angular/core';
import { DataService } from "../../shared/services/data.service";
import { Location } from "../../shared/models/location.model";

@Component({
  selector: 'app-location-list',
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent implements OnInit {
  public locations: Location[] = [];

  constructor(
      private dataService: DataService,
  ) {  }
  ngOnInit(): void {
    this.dataService.getLocationsByCurrentUser()
      .subscribe(locations =>
        this.locations = locations
      );
  }
}
