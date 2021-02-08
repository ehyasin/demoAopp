import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPage3Component } from './new-page3.component';

describe('NewPage3Component', () => {
  let component: NewPage3Component;
  let fixture: ComponentFixture<NewPage3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPage3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
