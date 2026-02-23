<<<<<<< HEAD
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAreaComponent } from './service-area.component';

describe('ServiceAreaComponent', () => {
  let component: ServiceAreaComponent;
  let fixture: ComponentFixture<ServiceAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
=======
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAreaComponent } from './service-area.component';

describe('ServiceAreaComponent', () => {
  let component: ServiceAreaComponent;
  let fixture: ComponentFixture<ServiceAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> 3460d3272a206d44f28fcf2012211c5cd6093c76
