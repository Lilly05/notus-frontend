import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuftdruckComponent } from './luftdruck.component';

describe('LuftdruckComponent', () => {
  let component: LuftdruckComponent;
  let fixture: ComponentFixture<LuftdruckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuftdruckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuftdruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
