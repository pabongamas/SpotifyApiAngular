import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumbyidComponent } from './albumbyid.component';

describe('AlbumbyidComponent', () => {
  let component: AlbumbyidComponent;
  let fixture: ComponentFixture<AlbumbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumbyidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
