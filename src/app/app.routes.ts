import { Routes } from "@angular/router";
import { LayoutComponent } from "./layout/layout/layout.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "index",
    pathMatch: "full",
  },
  {
    path: "",
    component: LayoutComponent,
    loadChildren: () =>
      import("./views/views.route").then((mod) => mod.VIEWS_ROUTE),
  },
  // {
  //   path:'index-single',
  //   component:IndexSingle1Component,
  //   data: { title: 'Helpmore-Charity and Fundraising Template' },
  // },
];
