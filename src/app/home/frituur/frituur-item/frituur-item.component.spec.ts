import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrituurItemComponent } from './frituur-item.component';

describe('FrituurItemComponent', () => {
  let component: FrituurItemComponent;
  let fixture: ComponentFixture<FrituurItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrituurItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrituurItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
