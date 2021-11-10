import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdemyInstructorComponent } from './udemy-instructor.component';

describe('UdemyInstructorComponent', () => {
  let component: UdemyInstructorComponent;
  let fixture: ComponentFixture<UdemyInstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdemyInstructorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UdemyInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
