import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { CreateUserComponent } from './shared/components/create-user/create-user.component';
import { UsertableComponent } from './shared/components/usertable/usertable.component';
import { ChartComponent } from './shared/components/chart/chart.component';

const routes: Routes = [
  {
      path:"" , component:DashboardComponent,   
         
},
{
  path:"createUser" , component:CreateUserComponent
},
{
  path:"usertable" , component:UsertableComponent
},
{
  path:"chart" , component:ChartComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

