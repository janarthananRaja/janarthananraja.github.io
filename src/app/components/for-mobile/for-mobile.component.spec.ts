import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForMobileComponent } from './for-mobile.component';

describe('ForMobileComponent', () => {
  let component: ForMobileComponent;
  let fixture: ComponentFixture<ForMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForMobileComponent]
    });
    fixture = TestBed.createComponent(ForMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
