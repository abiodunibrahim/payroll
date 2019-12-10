import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../@component/home/home.component';
import { DashboardComponent } from '../@component/dashboard/dashboard.component';
import { EmployeeComponent } from '../@component/employee/employee.component';
import { BasicsalaryComponent } from '../@component/payroll/basicsalary/basicsalary.component';
import { PayrollComponent } from '../@component/payroll/payroll/payroll.component';
import { ReportsalaryComponent } from '../@component/payroll/reportsalary/reportsalary.component';
import { AssetsComponent } from '../@component/assets/assets.component';
import { CreateEmployerComponent } from '../@component/create-employer/create-employer.component';

const routes: Routes = [
  {
    path: '', 
    component:HomeComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'employee', component: EmployeeComponent },
      { path: 'basic-salary', component: BasicsalaryComponent },
      { path: 'payroll', component: PayrollComponent },
      { path: 'payroll-reports', component: ReportsalaryComponent },
      { path: 'assets', component:AssetsComponent },
      { path: 'assets', component:AssetsComponent },
      { path: 'create-employer', component: CreateEmployerComponent,
    },
    {
      path: 'settings', 
      loadChildren: () => import('../setting/setting.module').then(m => m.SettingModule)
    },
    ]
  }
,
  { path: 'settings', redirectTo: 'settings/company', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
