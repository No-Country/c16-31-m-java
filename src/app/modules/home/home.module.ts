import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
