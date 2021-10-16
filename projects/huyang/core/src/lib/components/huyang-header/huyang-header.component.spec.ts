import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HuyangHeaderComponent } from './huyang-header.component';

describe('HeaderComponent', () => {
  let component: HuyangHeaderComponent;
  let fixture: ComponentFixture<HuyangHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HuyangHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuyangHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
