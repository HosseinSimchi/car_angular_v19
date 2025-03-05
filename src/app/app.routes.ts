import { Routes } from "@angular/router";

export const ApplicationRoutes: Routes = [
  {
    path: "layout",
    loadComponent: () =>
      import("./components/layout/layout.component").then(
        (m) => m.LayoutComponent
      ),
  },
  {
    path: "",
    redirectTo: "layout",
    pathMatch: "full",
  },
];
