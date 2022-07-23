import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from '../user-profile/forms/forms.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { AuthComponent } from './auth.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'user',
    component: UserProfileComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: 'form',
        component: FormsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
