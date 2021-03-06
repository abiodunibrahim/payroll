import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { HomeComponent } from '../@component/setting/home/home.component';
import { DepartmentComponent } from '../@component/setting/department/department.component';
import { SalaryComponent } from '../@component/setting/salary/salary.component';
import { CompanyComponent } from '../@component/setting/company/company.component';
import { SharedModule } from '../@shared/shared/shared.module';
import { SalarySetupComponent } from '../@component/setting/salary-setup/salary-setup.component';
import { ExpenseComponent } from '../@component/setting/expense/expense.component';
import { LeaveComponent } from '../@component/setting/leave/leave.component';
import { SalarycreateComponent } from '../@component/setting/salarycreate/salarycreate.component';
import { RoleComponent } from '../@component/setting/role/role.component';
import { RolecreateComponent } from '../@component/setting/rolecreate/rolecreate.component';
import { LocationComponent } from '../@component/setting/location/location.component';
import { DesignationComponent } from '../@component/setting/designation/designation.component';
import { ApiserviceService } from '../@shared/apiservice.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorServices } from '../@shared/intercept';
import { IncreComponent } from '../@component/setting/incre/incre.component';
import { CalenderComponent } from '../@component/setting/calender/calender.component';
import { WorkflowComponent } from '../@component/setting/workflow/workflow.component';
import { MenuComponent } from '../@component/setting/menu/menu.component';
import { LoanWorkflowComponent } from '../@component/setting/loan-workflow/loan-workflow.component';
import { HolidayComponent } from '../@component/setting/holiday/holiday.component';
import { SettingComponent } from '../@component/setting/setting.component';
import { SurveryComponent } from '../@component/setting/survery/survery.component';
import { SurveryAddComponent } from '../@component/setting/survery-add/survery-add.component';
import { SurveryReadComponent } from '../@component/setting/survery-read/survery-read.component';
import { SurveryRatingComponent } from '../@component/setting/survery-rating/survery-rating.component';
import { SurveryRatingReadComponent } from '../@component/setting/survery-rating-read/survery-rating-read.component';
import { SurveryRatingAddComponent } from '../@component/setting/survery-rating-add/survery-rating-add.component';
import { AnalysticComponent } from '../@component/setting/analystic/analystic.component';
import { FeebackComponent } from '../@component/setting/feeback/feeback.component';
import { SdashboardComponent } from '../@component/setting/sdashboard/sdashboard.component';
import { SscorebyperiodComponent } from '../@component/setting/sscorebyperiod/sscorebyperiod.component';
import { SdepartmentComponent } from '../@component/setting/sdepartment/sdepartment.component';
//import { HolidayComponent } from '../@component/holiday/holiday.component';






@NgModule({
  declarations: [HomeComponent,SettingComponent, DepartmentComponent, SalaryComponent, CompanyComponent, SalarySetupComponent, ExpenseComponent, LeaveComponent, SalarycreateComponent, RoleComponent, RolecreateComponent, LocationComponent, DesignationComponent, IncreComponent, CalenderComponent, WorkflowComponent, MenuComponent, LoanWorkflowComponent, HolidayComponent, SurveryComponent, SurveryAddComponent, SurveryReadComponent, SurveryRatingComponent, SurveryRatingReadComponent, SurveryRatingAddComponent, AnalysticComponent, FeebackComponent, SdashboardComponent, SscorebyperiodComponent, SdepartmentComponent],
  imports: [
    CommonModule,
    SettingRoutingModule,

    SharedModule
  ],providers:[ApiserviceService,{
    provide:HTTP_INTERCEPTORS,
    useClass:InterceptorServices,
    multi:true
  }]
})
export class SettingModule { }
