import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistAllComponent } from './playlist-all.component';

describe('PlaylistAllComponent', () => {
  let component: PlaylistAllComponent;
  let fixture: ComponentFixture<PlaylistAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaylistAllComponent]
    });
    fixture = TestBed.createComponent(PlaylistAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
