import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameValidatorComponent } from './username-validator.component';

describe('UsernameValidatorComponent', () => {
  let component: UsernameValidatorComponent;
  let fixture: ComponentFixture<UsernameValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsernameValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernameValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
