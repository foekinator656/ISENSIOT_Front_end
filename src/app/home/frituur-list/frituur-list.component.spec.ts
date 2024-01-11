import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrituurListComponent } from './frituur-list.component';

describe('FrituurListComponent', () => {
  let component: FrituurListComponent;
  let fixture: ComponentFixture<FrituurListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrituurListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrituurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
