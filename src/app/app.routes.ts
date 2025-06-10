import { Routes } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: ""
  },
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      {
        path: "",
        loadComponent: ()=> import("./pages/home/home.component")
      },
      {
        path: "kafedra/:id",
        loadComponent: ()=> import("./pages/kafedralar/kafedra/kafedra.component")
      },
      {
        path: "subject/:id",
        loadComponent: ()=> import("./pages/subjects/subject/subject.component")
      },
      {
        path: "subjects",
        loadComponent: ()=> import("./pages/subjects/subjects.component")
      },
      {
        path: "teachers",
        loadComponent: ()=> import("./pages/teachers/teachers.component")
      },
      {
        path: "kafedralar",
        loadComponent: ()=> import("./pages/kafedralar/kafedralar.component")
      }
    ]
  }
];
