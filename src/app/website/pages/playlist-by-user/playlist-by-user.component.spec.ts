import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistByUserComponent } from './playlist-by-user.component';

describe('PlaylistByUserComponent', () => {
  let component: PlaylistByUserComponent;
  let fixture: ComponentFixture<PlaylistByUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaylistByUserComponent]
    });
    fixture = TestBed.createComponent(PlaylistByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
