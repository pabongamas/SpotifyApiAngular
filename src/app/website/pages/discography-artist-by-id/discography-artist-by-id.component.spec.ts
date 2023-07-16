import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscographyArtistByIDComponent } from './discography-artist-by-id.component';

describe('DiscographyArtistByIDComponent', () => {
  let component: DiscographyArtistByIDComponent;
  let fixture: ComponentFixture<DiscographyArtistByIDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiscographyArtistByIDComponent]
    });
    fixture = TestBed.createComponent(DiscographyArtistByIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
