import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./user/login/login.component";
import { LocationComponent } from "./home/location/location.component";
import { FrituurComponent } from "./home/frituur/frituur.component";
import { BatchComponent } from "./home/batch/batch.component";

const routes: Routes = [
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
