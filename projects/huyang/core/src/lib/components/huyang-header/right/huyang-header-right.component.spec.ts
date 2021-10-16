import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HuyangHeaderRightComponent } from './huyang-header-right.component';

describe('RightComponent', () => {
  let component: HuyangHeaderRightComponent;
  let fixture: ComponentFixture<HuyangHeaderRightComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HuyangHeaderRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuyangHeaderRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
