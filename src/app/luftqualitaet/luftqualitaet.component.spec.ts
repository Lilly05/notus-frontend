import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuftqualitaetComponent } from './luftqualitaet.component';

describe('LuftqualitaetComponent', () => {
  let component: LuftqualitaetComponent;
  let fixture: ComponentFixture<LuftqualitaetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuftqualitaetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuftqualitaetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
