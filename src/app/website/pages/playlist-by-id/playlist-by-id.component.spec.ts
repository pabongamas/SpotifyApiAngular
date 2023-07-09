import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistByIdComponent } from './playlist-by-id.component';

describe('PlaylistByIdComponent', () => {
  let component: PlaylistByIdComponent;
  let fixture: ComponentFixture<PlaylistByIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaylistByIdComponent]
    });
    fixture = TestBed.createComponent(PlaylistByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
