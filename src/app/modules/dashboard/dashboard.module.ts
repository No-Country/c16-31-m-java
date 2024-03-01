import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AdoptComponent } from './adopt/adopt.component';
import { AdoptFormsComponent } from './adopt-forms/adopt-forms.component';
import { AnimalProfileComponent } from './animal-profile/animal-profile.component';
import { RefugeProfileComponent } from './components/refuge-profile/refuge-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdoptComponent,
    AdoptFormsComponent,
    AnimalProfileComponent,
    RefugeProfileComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
