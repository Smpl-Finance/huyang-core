import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HuyangLeftNavComponent } from './huyang-left-nav.component';

describe('LeftNavComponent', () => {
  let component: HuyangLeftNavComponent;
  let fixture: ComponentFixture<HuyangLeftNavComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HuyangLeftNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuyangLeftNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
