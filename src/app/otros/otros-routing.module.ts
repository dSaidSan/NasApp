import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NeowsComponent } from './components/neows/neows.component';
import { OtrosComponent } from './otros.component';

const routes: Routes = [{ path: '', component: OtrosComponent }, { path: 'neows', component: NeowsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtrosRoutingModule { }
