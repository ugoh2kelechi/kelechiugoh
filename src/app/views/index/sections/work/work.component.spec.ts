<<<<<<< HEAD
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { WorkComponent } from "./work.component";

describe("WorkComponent", () => {
  let component: WorkComponent;
  let fixture: ComponentFixture<WorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
=======
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { WorkComponent } from "./work.component";

describe("WorkComponent", () => {
  let component: WorkComponent;
  let fixture: ComponentFixture<WorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> 3460d3272a206d44f28fcf2012211c5cd6093c76
