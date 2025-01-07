import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatioPageComponent } from './ratio-page.component';

describe('RatioPageComponent', () => {
  let component: RatioPageComponent;
  let fixture: ComponentFixture<RatioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatioPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RatioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
