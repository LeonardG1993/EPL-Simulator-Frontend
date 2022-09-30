import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/pages/home/home.component';
import { LoginComponent } from 'src/pages/login/login.component';
import { RegisterComponent } from 'src/pages/register/register.component';
import { TableComponent } from 'src/pages/table/table.component';
import { UserComponent } from 'src/pages/user/user.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'user', component: UserComponent},
  {path: 'table', component: TableComponent},
  {path: 'login', component: LoginComponent},
  {path: 'login/register', component: LoginComponent},
  {path: '', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
