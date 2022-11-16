import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditComComponent } from './add-edit-com.component';

describe('AddEditComComponent', () => {
  let component: AddEditComComponent;
  let fixture: ComponentFixture<AddEditComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
