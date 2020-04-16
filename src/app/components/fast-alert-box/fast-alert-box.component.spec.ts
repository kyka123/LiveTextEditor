import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FastAlertBoxComponent } from './fast-alert-box.component';

describe('FastAlertBoxComponent', () => {
  let component: FastAlertBoxComponent;
  let fixture: ComponentFixture<FastAlertBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FastAlertBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FastAlertBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
