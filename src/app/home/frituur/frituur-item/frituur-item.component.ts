import { Component, Input } from '@angular/core';
import { Frituur } from "../../../shared/models/frituur.model";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";

@Component({
  selector: 'app-frituur-item',
  templateUrl: './frituur-item.component.html',
  styleUrl: './frituur-item.component.css'
})
export class FrituurItemComponent {
  protected readonly faArrowRight = faArrowRight;
  @Input()
  public frituur!: Frituur;
  @Input()
  public locationId!: string | null;
}
