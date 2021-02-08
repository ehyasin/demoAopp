import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPpageComponent } from './new-ppage.component';

describe('NewPpageComponent', () => {
  let component: NewPpageComponent;
  let fixture: ComponentFixture<NewPpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
