<<<<<<< HEAD
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventContentComponent } from './event-content.component';

describe('EventContentComponent', () => {
  let component: EventContentComponent;
  let fixture: ComponentFixture<EventContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
=======
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventContentComponent } from './event-content.component';

describe('EventContentComponent', () => {
  let component: EventContentComponent;
  let fixture: ComponentFixture<EventContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> 3460d3272a206d44f28fcf2012211c5cd6093c76
