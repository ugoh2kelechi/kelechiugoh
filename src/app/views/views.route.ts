import { Route } from "@angular/router";
import { BlogComponent } from "./blogs/blog/blog.component";
import { BlogSingleComponent } from "./blogs/blog-single/blog-single.component";
import { CausesComponent } from "./causes/causes/causes.component";
import { CausesSingleComponent } from "./causes/causes-single/causes-single.component";
import { EventsComponent } from "./events/events/events.component";
import { EventsSingleComponent } from "./events/events-single/events-single.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { FaqComponent } from "./pages/faq/faq.component";
import { ServicesComponent } from "./pages/services/services.component";
import { VolunteersComponent } from "./pages/volunteers/volunteers.component";
import { Error404Component } from "./pages/error404/error404.component";
import { AboutComponent } from "./about/about.component";
import { IndexComponent } from "./index/index.component";

export const VIEWS_ROUTE: Route[] = [
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "blog",
    component: BlogComponent,
  },
  {
    path: "blog-single",
    component: BlogSingleComponent,
  },
  {
    path: "causes",
    component: CausesComponent,
  },
  {
    path: "causes-single",
    component: CausesSingleComponent,
  },
  {
    path: "event",
    component: EventsComponent,
  },
  {
    path: "event-single",
    component: EventsSingleComponent,
  },
  {
    path: "faq",
    component: FaqComponent,
  },
  {
    path: "services",
    component: ServicesComponent,
  },
  {
    path: "volunteers",
    component: VolunteersComponent,
  },
  {
    path: "404",
    component: Error404Component,
  },
  {
    path: "contact",
    component: ContactComponent,
  },
  {
    path: "index",
    component: IndexComponent,
  },
];
