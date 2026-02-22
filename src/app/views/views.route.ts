import { Route } from "@angular/router";
import { BlogComponent } from "./blogs/blog/blog.component";
import { BlogSingleComponent } from "./blogs/blog-single/blog-single.component";
import { CausesComponent } from "./causes/causes/causes.component";
import { CausesSingleComponent } from "./causes/causes-single/causes-single.component";
import { EventsComponent } from "./events/events/events.component";
import { EventsSingleComponent } from "./events/events-single/events-single.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { FaqComponent } from "./pages/faq/faq.component";
import { PrivacyPolicyComponent } from "./pages/privacy-policy/privacy-policy.component";
import { ServicesComponent } from "./pages/services/services.component";
import { TermsConditionsComponent } from "./pages/terms-conditions/terms-conditions.component";
import { VolunteersComponent } from "./pages/volunteers/volunteers.component";
import { PhilanthropyComponent } from "./pages/philanthropy/philanthropy.component";
import { Error404Component } from "./pages/error404/error404.component";
import { AboutComponent } from "./about/about.component";
import { IndexComponent } from "./index/index.component";
import { TestimonialsRedirectComponent } from "./pages/testimonials-redirect/testimonials-redirect.component";

export const VIEWS_ROUTE: Route[] = [
  {
    path: "about",
    component: AboutComponent,
    data: {
      title: "About | Kelechi K. Ugoh",
      description: "Learn about our mission, vision, and impact.",
    },
  },
  {
    path: "blog",
    component: BlogComponent,
    data: {
      title: "Blog | Kelechi K. Ugoh",
      description: "Stories, updates, and insights from our work.",
    },
  },
  {
    path: "blog-details/:slug",
    component: BlogSingleComponent,
    data: {
      title: "Blog Details | Kelechi K. Ugoh",
      description: "Read the full story and key takeaways.",
    },
  },
  {
    path: "blog-single",
    component: BlogSingleComponent,
    data: {
      title: "Blog Details | Kelechi K. Ugoh",
      description: "Read the full story and key takeaways.",
    },
  },
  {
    path: "causes",
    component: CausesComponent,
    data: {
      title: "Causes | Kelechi K. Ugoh",
      description: "Explore the causes we support and how you can help.",
    },
  },
  {
    path: "cause-details/:slug",
    component: CausesSingleComponent,
    data: {
      title: "Cause Details | Kelechi K. Ugoh",
      description: "Learn more about this cause and its impact.",
    },
  },
  {
    path: "cause-details",
    component: CausesSingleComponent,
    data: {
      title: "Cause Details | Kelechi K. Ugoh",
      description: "Learn more about this cause and its impact.",
    },
  },
  {
    path: "causes-single",
    component: CausesSingleComponent,
    data: {
      title: "Cause Details | Kelechi K. Ugoh",
      description: "Learn more about this cause and its impact.",
    },
  },
  {
    path: "event",
    component: EventsComponent,
    data: {
      title: "Events | Kelechi K. Ugoh",
      description: "Upcoming events and community initiatives.",
    },
  },
  {
    path: "event-details/:slug",
    component: EventsSingleComponent,
    data: {
      title: "Event Details | Kelechi K. Ugoh",
      description: "Event information, schedules, and participation details.",
    },
  },
  {
    path: "event-details",
    component: EventsSingleComponent,
    data: {
      title: "Event Details | Kelechi K. Ugoh",
      description: "Event information, schedules, and participation details.",
    },
  },
  {
    path: "event-single",
    component: EventsSingleComponent,
    data: {
      title: "Event Details | Kelechi K. Ugoh",
      description: "Event information, schedules, and participation details.",
    },
  },
  {
    path: "faq",
    component: FaqComponent,
    data: {
      title: "FAQ | Kelechi K. Ugoh",
      description: "Frequently asked questions and answers.",
    },
  },
  {
    path: "services",
    component: ServicesComponent,
    data: {
      title: "Services | Kelechi K. Ugoh",
      description: "Our services and programs for community impact.",
    },
  },
  {
    path: "privacy-policy",
    component: PrivacyPolicyComponent,
    data: {
      title: "Privacy Policy | Kelechi K. Ugoh",
      description: "Learn how we collect, use, and protect your data.",
    },
  },
  {
    path: "terms-conditions",
    component: TermsConditionsComponent,
    data: {
      title: "Terms & Conditions | Kelechi K. Ugoh",
      description: "Review our terms and conditions of use.",
    },
  },
  {
    path: "philanthropy",
    component: PhilanthropyComponent,
    data: {
      title: "Philanthropy | Kelechi K. Ugoh",
      description: "Learn about our philanthropic partnerships and impact.",
    },
  },
  {
    path: "volunteers",
    component: VolunteersComponent,
    data: {
      title: "Volunteers | Kelechi K. Ugoh",
      description: "Meet our volunteers and their contributions.",
    },
  },
  {
    path: "404",
    component: Error404Component,
    data: {
      title: "Page Not Found | Kelechi K. Ugoh",
      description: "The page you are looking for does not exist.",
    },
  },
  {
    path: "contact",
    component: ContactComponent,
    data: {
      title: "Contact | Kelechi K. Ugoh",
      description: "Get in touch with us.",
    },
  },
  {
    path: "testimonials",
    component: TestimonialsRedirectComponent,
    data: {
      title: "Testimonials | Kelechi K. Ugoh",
      description: "Read testimonials and stories of impact.",
    },
  },
  {
    path: "index",
    component: IndexComponent,
    data: {
      title: "Home | Kelechi K. Ugoh",
      description: "Official website and community impact initiatives.",
    },
  },
];
