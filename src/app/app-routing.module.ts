import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: "", loadChildren:() => import( './layout/dashboard/dashboard.module').then(m=>m.DashboardModule) },
  { path: "Dashboard", loadChildren:() => import( './layout/dashboard/dashboard.module').then(m=>m.DashboardModule) },
  { path: "Customer", loadChildren: () => import('./layout/customer/customer.module').then(m=>m.CustomerModule) },
  // { path: '**', redirectTo: 'Dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
