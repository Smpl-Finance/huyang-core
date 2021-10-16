import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HuyangUserProfileComponent } from './huyang-user-profile.component';

describe('HuyangUserProfileComponent', () => {
  let component: HuyangUserProfileComponent;
  let fixture: ComponentFixture<HuyangUserProfileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HuyangUserProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuyangUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
