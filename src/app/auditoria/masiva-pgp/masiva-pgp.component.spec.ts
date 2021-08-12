import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasivaPGPComponent } from './masiva-pgp.component';

describe('MasivaPGPComponent', () => {
  let component: MasivaPGPComponent;
  let fixture: ComponentFixture<MasivaPGPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasivaPGPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasivaPGPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
