import { Component } from "@angular/core";
import { BreadcrumbComponent } from "../../../common/breadcrumb/breadcrumb.component";
import { EventAreaComponent } from "./components/event-area/event-area.component";

@Component({
  selector: "app-events",
  imports: [BreadcrumbComponent, EventAreaComponent],
  templateUrl: "./events.component.html",
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent {}
