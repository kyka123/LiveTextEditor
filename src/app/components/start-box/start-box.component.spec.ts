import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartBoxComponent } from './start-box.component';

describe('StartBoxComponent', () => {
  let component: StartBoxComponent;
  let fixture: ComponentFixture<StartBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
