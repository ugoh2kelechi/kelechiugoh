import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../../component/breadcrumb/breadcrumb.component";
import { EventAreaComponent } from "./components/event-area/event-area.component";

@Component({
  selector: 'app-events',
  imports: [BreadcrumbComponent, EventAreaComponent],
  templateUrl: './events.component.html',
  styles: ``
})
export class EventsComponent {

}
