import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsDashboardComponent } from './students-dashboard/students-dashboard.component';

const routes: Routes = [
{
 path:'', redirectTo:'login', pathMatch:'full'
},
{
  path:'login',component:LoginComponent
},
{
  path:'admin',component:StudentsDashboardComponent
}
,




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
