import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptFormsComponent } from './adopt-forms.component';

describe('AdoptFormsComponent', () => {
  let component: AdoptFormsComponent;
  let fixture: ComponentFixture<AdoptFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdoptFormsComponent]
    });
    fixture = TestBed.createComponent(AdoptFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
