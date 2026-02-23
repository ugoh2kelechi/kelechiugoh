<<<<<<< HEAD
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionAreaComponent } from './mission-area.component';

describe('MissionAreaComponent', () => {
  let component: MissionAreaComponent;
  let fixture: ComponentFixture<MissionAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissionAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
=======
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionAreaComponent } from './mission-area.component';

describe('MissionAreaComponent', () => {
  let component: MissionAreaComponent;
  let fixture: ComponentFixture<MissionAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissionAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> 3460d3272a206d44f28fcf2012211c5cd6093c76
