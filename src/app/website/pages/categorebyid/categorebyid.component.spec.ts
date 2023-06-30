import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorebyidComponent } from './categorebyid.component';

describe('CategorebyidComponent', () => {
  let component: CategorebyidComponent;
  let fixture: ComponentFixture<CategorebyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorebyidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorebyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
