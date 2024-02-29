import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefugeProfileComponent } from './refuge-profile.component';

describe('RefugeProfileComponent', () => {
  let component: RefugeProfileComponent;
  let fixture: ComponentFixture<RefugeProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RefugeProfileComponent]
    });
    fixture = TestBed.createComponent(RefugeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
