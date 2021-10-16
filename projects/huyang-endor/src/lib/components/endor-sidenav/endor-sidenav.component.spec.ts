import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EndorSidenavComponent } from './endor-sidenav.component';

describe('EndorSidenavComponent', () => {
  let component: EndorSidenavComponent;
  let fixture: ComponentFixture<EndorSidenavComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EndorSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndorSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
