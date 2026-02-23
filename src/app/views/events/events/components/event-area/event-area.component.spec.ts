<<<<<<< HEAD
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAreaComponent } from './event-area.component';

describe('EventAreaComponent', () => {
  let component: EventAreaComponent;
  let fixture: ComponentFixture<EventAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
=======
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAreaComponent } from './event-area.component';

describe('EventAreaComponent', () => {
  let component: EventAreaComponent;
  let fixture: ComponentFixture<EventAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> 3460d3272a206d44f28fcf2012211c5cd6093c76
