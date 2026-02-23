<<<<<<< HEAD
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { IndexComponent } from "./index.component";

describe("IndexComponent", () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
=======
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { IndexComponent } from "./index.component";

describe("IndexComponent", () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> 3460d3272a206d44f28fcf2012211c5cd6093c76
