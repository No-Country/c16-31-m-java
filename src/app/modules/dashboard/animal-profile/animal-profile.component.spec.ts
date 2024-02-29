import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalProfileComponent } from './animal-profile.component';

describe('AnimalProfileComponent', () => {
  let component: AnimalProfileComponent;
  let fixture: ComponentFixture<AnimalProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimalProfileComponent]
    });
    fixture = TestBed.createComponent(AnimalProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
