import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProTemplateComponent } from './pro-template.component';

describe('ProTemplateComponent', () => {
  let component: ProTemplateComponent;
  let fixture: ComponentFixture<ProTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
