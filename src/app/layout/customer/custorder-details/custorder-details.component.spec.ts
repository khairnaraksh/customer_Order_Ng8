import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustorderDetailsComponent } from './custorder-details.component';

describe('CustorderDetailsComponent', () => {
  let component: CustorderDetailsComponent;
  let fixture: ComponentFixture<CustorderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustorderDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustorderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
