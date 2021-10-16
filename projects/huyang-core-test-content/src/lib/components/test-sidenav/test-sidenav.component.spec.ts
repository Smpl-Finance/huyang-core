import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestSidenavComponent } from './test-sidenav.component';

describe('TestSidenavComponent', () => {
  let component: TestSidenavComponent;
  let fixture: ComponentFixture<TestSidenavComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
