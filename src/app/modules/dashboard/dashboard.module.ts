import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AdoptComponent } from './adopt/adopt.component';
import { AdoptFormsComponent } from './adopt-forms/adopt-forms.component';
import { AnimalProfileComponent } from './animal-profile/animal-profile.component';
import { RefugeProfileComponent } from './components/refuge-profile/refuge-profile.component';


@NgModule({
  declarations: [
    AdoptComponent,
    AdoptFormsComponent,
    AnimalProfileComponent,
    RefugeProfileComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
