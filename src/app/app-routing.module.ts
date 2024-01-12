import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./user/login/login.component";
import { LocationComponent } from "./home/location/location.component";
import { FrituurComponent } from "./home/frituur/frituur.component";
import { BatchComponent } from "./home/batch/batch.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: LocationComponent },
  { path: 'home/:id', component: FrituurComponent },
  { path: 'home/:id/:id2', component: BatchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
