import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { UserAddComponent } from './user/user-add/user-add.component';


const routes: Routes = [
  {path:'',redirectTo:'login', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {
    path: 'user/add', component: UserAddComponent,canActivate: [AuthGuard], // Utilise l'AuthGuard pour protéger l'accès
  },
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
