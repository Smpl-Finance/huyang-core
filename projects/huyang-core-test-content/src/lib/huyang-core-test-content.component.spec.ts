import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HuyangCoreTestContentComponent } from './huyang-core-test-content.component';

describe('HuyangCoreTestContentComponent', () => {
  let component: HuyangCoreTestContentComponent;
  let fixture: ComponentFixture<HuyangCoreTestContentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HuyangCoreTestContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuyangCoreTestContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
