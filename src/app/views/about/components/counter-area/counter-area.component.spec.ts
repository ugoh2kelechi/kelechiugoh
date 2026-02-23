<<<<<<< HEAD
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterAreaComponent } from './counter-area.component';

describe('CounterAreaComponent', () => {
  let component: CounterAreaComponent;
  let fixture: ComponentFixture<CounterAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
=======
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterAreaComponent } from './counter-area.component';

describe('CounterAreaComponent', () => {
  let component: CounterAreaComponent;
  let fixture: ComponentFixture<CounterAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> 3460d3272a206d44f28fcf2012211c5cd6093c76
