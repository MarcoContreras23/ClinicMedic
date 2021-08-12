import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPGPComponent } from './crear-pgp.component';

describe('CrearPGPComponent', () => {
  let component: CrearPGPComponent;
  let fixture: ComponentFixture<CrearPGPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPGPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPGPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
