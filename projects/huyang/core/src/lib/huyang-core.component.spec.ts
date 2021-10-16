import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HuyangCoreComponent } from './huyang-core.component';

describe('CoreComponent', () => {
  let component: HuyangCoreComponent;
  let fixture: ComponentFixture<HuyangCoreComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HuyangCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuyangCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
