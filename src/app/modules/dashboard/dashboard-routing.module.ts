import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdoptComponent } from './adopt/adopt.component';
import { AdoptFormsComponent } from './adopt-forms/adopt-forms.component';
import { AnimalProfileComponent } from './animal-profile/animal-profile.component';

const routes: Routes = [
  { path: '', component: AdoptComponent },
  { path: 'adopts-forms', component: AdoptFormsComponent },
  { path: ':id', component: AnimalProfileComponent },
  { path: 'adopts-forms-animalRescued', component: AdoptFormsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
