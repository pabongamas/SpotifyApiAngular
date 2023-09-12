import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsTopTracksComponent } from './artists-top-tracks.component';

describe('ArtistsTopTracksComponent', () => {
  let component: ArtistsTopTracksComponent;
  let fixture: ComponentFixture<ArtistsTopTracksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistsTopTracksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistsTopTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
