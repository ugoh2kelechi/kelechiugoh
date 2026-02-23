<<<<<<< HEAD
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CausesSingleComponent } from './causes-single.component';

describe('CausesSingleComponent', () => {
  let component: CausesSingleComponent;
  let fixture: ComponentFixture<CausesSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CausesSingleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CausesSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
=======
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CausesSingleComponent } from './causes-single.component';

describe('CausesSingleComponent', () => {
  let component: CausesSingleComponent;
  let fixture: ComponentFixture<CausesSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CausesSingleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CausesSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> 3460d3272a206d44f28fcf2012211c5cd6093c76
