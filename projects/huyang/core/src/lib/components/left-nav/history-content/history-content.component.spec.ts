import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HistoryContentComponent } from './history-content.component';

describe('HistoryContentComponent', () => {
  let component: HistoryContentComponent;
  let fixture: ComponentFixture<HistoryContentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
