import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HuyangAuthCallbackComponent } from './huyang-auth-callback.component';

describe('HuyangAuthCallbackComponent', () => {
  let component: HuyangAuthCallbackComponent;
  let fixture: ComponentFixture<HuyangAuthCallbackComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HuyangAuthCallbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuyangAuthCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
