import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuftfeuchtigkeitComponent } from './luftfeuchtigkeit.component';

describe('LuftfeuchtigkeitComponent', () => {
  let component: LuftfeuchtigkeitComponent;
  let fixture: ComponentFixture<LuftfeuchtigkeitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuftfeuchtigkeitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuftfeuchtigkeitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
