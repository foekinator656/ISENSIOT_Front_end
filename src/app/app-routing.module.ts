import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./user/login/login.component";
import { LocationComponent } from "./home/location/location.component";
import { FrituurComponent } from "./home/frituur/frituur.component";
import { BatchComponent } from "./home/batch/batch.component";
import { GraphComponent } from "./batch-info/batch-info/graph/graph.component";
import { BatchInfoComponent } from "./batch-info/batch-info/batch-info.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'graph', component: GraphComponent},
  { path: 'home', component: LocationComponent },
  { path: 'home/:id', component: FrituurComponent },
  { path: 'home/:id/:id2', component: BatchComponent },
  {path: 'home/:id/:id2/:id3', component: BatchInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
