import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HuyangLeftNavHeaderComponent } from './huyang-left-nav-header.component';

describe('HeaderComponent', () => {
  let component: HuyangLeftNavHeaderComponent;
  let fixture: ComponentFixture<HuyangLeftNavHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HuyangLeftNavHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuyangLeftNavHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
