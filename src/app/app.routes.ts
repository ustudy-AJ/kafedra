import { Routes } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/home"
  },
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      {
        path: "home",
        loadComponent: ()=> import("./pages/home/home.component")
      },
      {
        path: "kafedra/:id",
        loadComponent: ()=> import("./pages/kafedra/kafedra.component")
      },
      {
        path: "subject/:id",
        loadComponent: ()=> import("./pages/subject/subject.component")
      }
    ]
  }
];
