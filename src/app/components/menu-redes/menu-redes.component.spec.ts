import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRedesComponent } from './menu-redes.component';

describe('MenuRedesComponent', () => {
  let component: MenuRedesComponent;
  let fixture: ComponentFixture<MenuRedesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuRedesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuRedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
