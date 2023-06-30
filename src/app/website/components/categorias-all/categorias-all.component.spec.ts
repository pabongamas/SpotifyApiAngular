import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasAllComponent } from './categorias-all.component';

describe('CategoriasAllComponent', () => {
  let component: CategoriasAllComponent;
  let fixture: ComponentFixture<CategoriasAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriasAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriasAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
