import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { CreateUserComponent } from './shared/components/create-user/create-user.component';

const routes: Routes = [
  {
      path:"" , component:DashboardComponent,   
         
},
{
  path:"createUser" , component:CreateUserComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

