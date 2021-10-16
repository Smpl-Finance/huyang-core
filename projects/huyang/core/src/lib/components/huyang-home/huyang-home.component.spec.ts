import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HuyangHomeComponent } from './huyang-home.component';

describe('HuyangHomeComponent', () => {
  let component: HuyangHomeComponent;
  let fixture: ComponentFixture<HuyangHomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HuyangHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuyangHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
