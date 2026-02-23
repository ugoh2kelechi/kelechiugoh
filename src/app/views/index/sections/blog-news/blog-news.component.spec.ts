<<<<<<< HEAD
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { BlogNewsComponent } from "./blog-news.component";

describe("BlogNewsComponent", () => {
  let component: BlogNewsComponent;
  let fixture: ComponentFixture<BlogNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogNewsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
=======
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { BlogNewsComponent } from "./blog-news.component";

describe("BlogNewsComponent", () => {
  let component: BlogNewsComponent;
  let fixture: ComponentFixture<BlogNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogNewsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> 3460d3272a206d44f28fcf2012211c5cd6093c76
