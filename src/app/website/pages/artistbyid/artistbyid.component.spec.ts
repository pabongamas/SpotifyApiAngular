import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistbyidComponent } from './artistbyid.component';

describe('ArtistbyidComponent', () => {
  let component: ArtistbyidComponent;
  let fixture: ComponentFixture<ArtistbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistbyidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
