import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../../component/breadcrumb/breadcrumb.component";
import { EventContentComponent } from './components/event-content/event-content.component';
import { EventSidebarAreaComponent } from './components/event-sidebar-area/event-sidebar-area.component';

@Component({
  selector: 'app-events-single',
  imports: [BreadcrumbComponent,EventContentComponent,EventSidebarAreaComponent],
  templateUrl: './events-single.component.html',
  styles: ``
})
export class EventsSingleComponent {

}
