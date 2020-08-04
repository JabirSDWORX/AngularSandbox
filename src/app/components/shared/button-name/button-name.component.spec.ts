import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonNameComponent } from './button-name.component';

describe('ButtonNameComponent', () => {
  let component: ButtonNameComponent;
  let fixture: ComponentFixture<ButtonNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
