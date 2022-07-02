import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtrosRoutingModule } from './otros-routing.module';
import { OtrosComponent } from './otros.component';
import { NeowsComponent } from './components/neows/neows.component';


@NgModule({
  declarations: [
    OtrosComponent,
    NeowsComponent
  ],
  imports: [
    CommonModule,
    OtrosRoutingModule
  ]
})
export class OtrosModule { }
