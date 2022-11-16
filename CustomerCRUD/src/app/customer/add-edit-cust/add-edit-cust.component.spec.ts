import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCustComponent } from './add-edit-cust.component';

describe('AddEditCustComponent', () => {
  let component: AddEditCustComponent;
  let fixture: ComponentFixture<AddEditCustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditCustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditCustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
