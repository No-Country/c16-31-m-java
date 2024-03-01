import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptFormsAnimalRescuedComponent } from './adopt-forms-animal-rescued.component';

describe('AdoptFormsAnimalRescuedComponent', () => {
  let component: AdoptFormsAnimalRescuedComponent;
  let fixture: ComponentFixture<AdoptFormsAnimalRescuedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdoptFormsAnimalRescuedComponent]
    });
    fixture = TestBed.createComponent(AdoptFormsAnimalRescuedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
