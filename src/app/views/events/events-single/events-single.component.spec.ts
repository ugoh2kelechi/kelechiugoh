<<<<<<< HEAD
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsSingleComponent } from './events-single.component';

describe('EventsSingleComponent', () => {
  let component: EventsSingleComponent;
  let fixture: ComponentFixture<EventsSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsSingleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
=======
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsSingleComponent } from './events-single.component';

describe('EventsSingleComponent', () => {
  let component: EventsSingleComponent;
  let fixture: ComponentFixture<EventsSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsSingleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> 3460d3272a206d44f28fcf2012211c5cd6093c76
