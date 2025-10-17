import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurStores } from './our-stores';

describe('OurStores', () => {
  let component: OurStores;
  let fixture: ComponentFixture<OurStores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurStores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurStores);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
