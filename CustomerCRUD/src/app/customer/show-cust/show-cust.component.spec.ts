import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCustComponent } from './show-cust.component';

describe('ShowCustComponent', () => {
  let component: ShowCustComponent;
  let fixture: ComponentFixture<ShowCustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
