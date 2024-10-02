import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWhyComponent } from './card-why.component';

describe('CardWhyComponent', () => {
  let component: CardWhyComponent;
  let fixture: ComponentFixture<CardWhyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardWhyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardWhyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
