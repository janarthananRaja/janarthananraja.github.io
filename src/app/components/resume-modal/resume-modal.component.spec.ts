import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeModalComponent } from './resume-modal.component';

describe('ResumeModalComponent', () => {
  let component: ResumeModalComponent;
  let fixture: ComponentFixture<ResumeModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeModalComponent]
    });
    fixture = TestBed.createComponent(ResumeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
