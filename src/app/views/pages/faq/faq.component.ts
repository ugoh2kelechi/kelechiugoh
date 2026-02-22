import { Component } from "@angular/core";
import { BreadcrumbComponent } from "../../../common/breadcrumb/breadcrumb.component";
import { NgbAccordionModule, NgbNavModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-faq",
  imports: [BreadcrumbComponent, NgbNavModule, NgbAccordionModule],
  templateUrl: "./faq.component.html",
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent {}
