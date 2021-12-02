import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { UsersComponent } from './users/users.component';
import { TagsComponent } from './tags/tags.component';
import { QuestionsComponent } from './questions/questions.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Login',component:LoginComponent},
  {path:'signup',component:RegisterComponent},
  {path:'Forgot Password',component:ForgotpasswordComponent},
  {path:'menu',component:UsersComponent},
  {path:'users',component:UsersComponent},
  {path:'tags',component:TagsComponent},
  {path:'Questions',component:QuestionsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
