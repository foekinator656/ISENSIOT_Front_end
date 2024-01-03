import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { RegistrationFormComponent } from "./login/registration-form/registration-form.component";
import { AccountComponent } from "./login/account/account.component";
import {NgModule} from "@angular/core";

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'registration', component: RegistrationFormComponent},
    {path: 'account', component: AccountComponent},
    {path: '**', redirectTo: 'not-found', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
