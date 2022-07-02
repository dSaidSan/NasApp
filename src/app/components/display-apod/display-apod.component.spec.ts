import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayApodComponent } from './display-apod.component';

describe('DisplayApodComponent', () => {
  let component: DisplayApodComponent;
  let fixture: ComponentFixture<DisplayApodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayApodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayApodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
