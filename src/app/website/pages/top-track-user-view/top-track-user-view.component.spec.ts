import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTrackUserViewComponent } from './top-track-user-view.component';

describe('TopTrackUserViewComponent', () => {
  let component: TopTrackUserViewComponent;
  let fixture: ComponentFixture<TopTrackUserViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopTrackUserViewComponent]
    });
    fixture = TestBed.createComponent(TopTrackUserViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
