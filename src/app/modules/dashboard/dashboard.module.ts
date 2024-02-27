import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AdoptComponent } from './adopt/adopt.component';
import { AdoptFormsComponent } from './adopt-forms/adopt-forms.component';


@NgModule({
  declarations: [
    AdoptComponent,
    AdoptFormsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
