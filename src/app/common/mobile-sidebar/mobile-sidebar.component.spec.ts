<<<<<<< HEAD
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSidebarComponent } from './mobile-sidebar.component';

describe('MobileSidebarComponent', () => {
  let component: MobileSidebarComponent;
  let fixture: ComponentFixture<MobileSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
=======
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSidebarComponent } from './mobile-sidebar.component';

describe('MobileSidebarComponent', () => {
  let component: MobileSidebarComponent;
  let fixture: ComponentFixture<MobileSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> 3460d3272a206d44f28fcf2012211c5cd6093c76
