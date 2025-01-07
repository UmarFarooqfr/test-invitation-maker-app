import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedTemplatesComponent } from './selected-templates.component';

describe('SelectedTemplatesComponent', () => {
  let component: SelectedTemplatesComponent;
  let fixture: ComponentFixture<SelectedTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedTemplatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectedTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
