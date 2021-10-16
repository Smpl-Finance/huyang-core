import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HuyangHeaderLeftComponent } from './huyang-header-left.component';

describe('LeftComponent', () => {
  let component: HuyangHeaderLeftComponent;
  let fixture: ComponentFixture<HuyangHeaderLeftComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HuyangHeaderLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuyangHeaderLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
