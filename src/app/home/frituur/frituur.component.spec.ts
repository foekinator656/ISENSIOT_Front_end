import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrituurComponent } from './frituur.component';

describe('FrituurListComponent', () => {
  let component: FrituurComponent;
  let fixture: ComponentFixture<FrituurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrituurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrituurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
