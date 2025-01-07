import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycardPageComponent } from './mycard-page.component';

describe('MycardPageComponent', () => {
  let component: MycardPageComponent;
  let fixture: ComponentFixture<MycardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MycardPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MycardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
