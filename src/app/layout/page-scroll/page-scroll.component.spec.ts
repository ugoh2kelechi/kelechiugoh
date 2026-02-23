<<<<<<< HEAD
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageScrollComponent } from './page-scroll.component';

describe('PageScrollComponent', () => {
  let component: PageScrollComponent;
  let fixture: ComponentFixture<PageScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageScrollComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
=======
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageScrollComponent } from './page-scroll.component';

describe('PageScrollComponent', () => {
  let component: PageScrollComponent;
  let fixture: ComponentFixture<PageScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageScrollComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> 3460d3272a206d44f28fcf2012211c5cd6093c76
