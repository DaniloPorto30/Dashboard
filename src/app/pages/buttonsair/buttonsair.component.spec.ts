import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsairComponent } from './buttonsair.component';

describe('ButtonsairComponent', () => {
  let component: ButtonsairComponent;
  let fixture: ComponentFixture<ButtonsairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsairComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
