import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HuyangHeaderCenterComponent } from './huyang-header-center.component';

describe('CenterComponent', () => {
  let component: HuyangHeaderCenterComponent;
  let fixture: ComponentFixture<HuyangHeaderCenterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HuyangHeaderCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuyangHeaderCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
