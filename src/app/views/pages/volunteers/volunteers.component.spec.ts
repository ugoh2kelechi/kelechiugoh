<<<<<<< HEAD
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteersComponent } from './volunteers.component';

describe('VolunteersComponent', () => {
  let component: VolunteersComponent;
  let fixture: ComponentFixture<VolunteersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolunteersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolunteersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
=======
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteersComponent } from './volunteers.component';

describe('VolunteersComponent', () => {
  let component: VolunteersComponent;
  let fixture: ComponentFixture<VolunteersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolunteersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolunteersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> 3460d3272a206d44f28fcf2012211c5cd6093c76
