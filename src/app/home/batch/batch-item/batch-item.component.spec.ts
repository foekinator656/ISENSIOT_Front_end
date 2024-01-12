import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchItemComponent } from './batch-item.component';

describe('BatchItemComponent', () => {
  let component: BatchItemComponent;
  let fixture: ComponentFixture<BatchItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BatchItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BatchItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
