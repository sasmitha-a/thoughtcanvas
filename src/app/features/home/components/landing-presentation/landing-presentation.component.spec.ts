import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPresentationComponent } from './landing-presentation.component';

describe('LandingPresentationComponent', () => {
  let component: LandingPresentationComponent;
  let fixture: ComponentFixture<LandingPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingPresentationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
