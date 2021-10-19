import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaboutComponent } from './dabout.component';

describe('DaboutComponent', () => {
  let component: DaboutComponent;
  let fixture: ComponentFixture<DaboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
