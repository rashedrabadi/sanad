import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ACCOUNTS_URLS, RECORDS_URLS, ROUTE_URLS } from './app.routes.names';
import { AccountsComponent } from './accounts/accounts.component';
import { RecordsComponent } from './records/records/records.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: ROUTE_URLS.DASHBOARD, component: DashboardComponent },
  {
    path: RECORDS_URLS.NAME, loadChildren: () => import('./records/records.module').then(m => m.RecordsModule)
  },
  { path: ACCOUNTS_URLS.NAME, component: AccountsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }