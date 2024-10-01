import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyadoptComponent } from './whyadopt.component';

describe('WhyadoptComponent', () => {
  let component: WhyadoptComponent;
  let fixture: ComponentFixture<WhyadoptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyadoptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyadoptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
