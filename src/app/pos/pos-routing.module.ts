import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { PosComponent } from './pos.component'

const routes: Routes = [
  {path: '', redirectTo: '/pos/pos', pathMatch: 'full'},
  {path: 'pos', component: PosComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PosRoutingModule {}
