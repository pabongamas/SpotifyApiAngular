import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAuthCallbackComponent } from './app-auth-callback.component';

describe('AppAuthCallbackComponent', () => {
  let component: AppAuthCallbackComponent;
  let fixture: ComponentFixture<AppAuthCallbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppAuthCallbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppAuthCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
