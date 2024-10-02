import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingBootonsComponent } from './floating-bootons.component';

describe('FloatingBootonsComponent', () => {
  let component: FloatingBootonsComponent;
  let fixture: ComponentFixture<FloatingBootonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloatingBootonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloatingBootonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
