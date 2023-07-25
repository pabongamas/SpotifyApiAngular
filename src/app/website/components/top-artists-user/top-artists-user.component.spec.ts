import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopArtistsUserComponent } from './top-artists-user.component';

describe('TopArtistsUserComponent', () => {
  let component: TopArtistsUserComponent;
  let fixture: ComponentFixture<TopArtistsUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopArtistsUserComponent]
    });
    fixture = TestBed.createComponent(TopArtistsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
