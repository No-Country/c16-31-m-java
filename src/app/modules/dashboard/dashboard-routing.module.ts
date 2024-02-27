import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdoptComponent } from './adopt/adopt.component';
import { AdoptFormsComponent } from './adopt-forms/adopt-forms.component';

const routes: Routes = [
  {path: '', component: AdoptComponent},
  { path: 'adopts-forms', component: AdoptFormsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
