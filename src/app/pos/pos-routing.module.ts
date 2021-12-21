import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AuthGuard } from '../auth/auth-guard.service'
import { Role } from '../auth/auth.enum'
import { PosComponent } from './pos.component'

const routes: Routes = [
  { path: '', redirectTo: '/pos/pos', pathMatch: 'full' },
  {
    path: 'pos',
    component: PosComponent,
    canActivate: [AuthGuard],
    data: { expectedRole: Role.Cashier },
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PosRoutingModule {}
