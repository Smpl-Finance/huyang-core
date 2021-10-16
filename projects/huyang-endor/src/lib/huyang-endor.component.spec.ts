import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HuyangEndorComponent } from './huyang-endor.component';

describe('HuyangEndorComponent', () => {
  let component: HuyangEndorComponent;
  let fixture: ComponentFixture<HuyangEndorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HuyangEndorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuyangEndorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
