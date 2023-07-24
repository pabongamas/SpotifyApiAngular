import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTracksUserComponent } from './top-tracks-user.component';

describe('TopTracksUserComponent', () => {
  let component: TopTracksUserComponent;
  let fixture: ComponentFixture<TopTracksUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopTracksUserComponent]
    });
    fixture = TestBed.createComponent(TopTracksUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
