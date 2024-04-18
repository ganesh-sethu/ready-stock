import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientHospitalsComponent } from './client-hospitals.component';

describe('ClientHospitalsComponent', () => {
  let component: ClientHospitalsComponent;
  let fixture: ComponentFixture<ClientHospitalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientHospitalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientHospitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
