import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirculitosComponent } from './circulitos.component';

describe('CirculitosComponent', () => {
  let component: CirculitosComponent;
  let fixture: ComponentFixture<CirculitosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CirculitosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CirculitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
