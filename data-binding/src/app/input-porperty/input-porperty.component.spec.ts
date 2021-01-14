import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPorpertyComponent } from './input-porperty.component';

describe('InputPorpertyComponent', () => {
  let component: InputPorpertyComponent;
  let fixture: ComponentFixture<InputPorpertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputPorpertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPorpertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
