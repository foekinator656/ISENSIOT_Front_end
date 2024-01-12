import { Component, Input } from '@angular/core';
import { Location } from "../../../shared/models/location.model";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";

@Component({
  selector: 'app-location-item',
  templateUrl: './location-item.component.html',
  styleUrl: './location-item.component.css'
})
export class LocationItemComponent {
  @Input()
  public location!: Location;
  protected readonly faArrowRight = faArrowRight;
}
