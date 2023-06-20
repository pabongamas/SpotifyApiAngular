import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReleasesAlbumComponent } from './new-releases-album.component';

describe('NewReleasesAlbumComponent', () => {
  let component: NewReleasesAlbumComponent;
  let fixture: ComponentFixture<NewReleasesAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewReleasesAlbumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewReleasesAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
