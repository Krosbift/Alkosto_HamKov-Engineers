import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginOptions } from './login-options';

describe('LoginOptions', () => {
  let component: LoginOptions;
  let fixture: ComponentFixture<LoginOptions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginOptions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginOptions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
