import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopArtistUserViewComponent } from './top-artist-user-view.component';

describe('TopArtistUserViewComponent', () => {
  let component: TopArtistUserViewComponent;
  let fixture: ComponentFixture<TopArtistUserViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopArtistUserViewComponent]
    });
    fixture = TestBed.createComponent(TopArtistUserViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
