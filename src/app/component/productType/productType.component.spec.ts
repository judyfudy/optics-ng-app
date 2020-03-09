import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTypeComponent } from './productType.component';

describe('ProductComponent', () => {
  let component: ProductTypeComponent;
  let fixture: ComponentFixture<ProductTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
