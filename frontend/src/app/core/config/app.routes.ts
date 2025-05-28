import { Routes } from '@angular/router';
import {HomePageComponent} from '../../components/pages/home-page/home-page-component/home-page.component';
import {UserHomeComponent} from '../../components/pages/user-home/user-home/user-home.component';
import {resolveUserDataConfiguration} from '../../resolvers/user.resolver';
import {authGuard} from '../auth/auth.guard';

export const routes: Routes = [
  {
    path: '', component: HomePageComponent
  },
  {
    path: 'user-home',
    component: UserHomeComponent,
    resolve: { userDataResolver: resolveUserDataConfiguration },
    canActivate: [authGuard]
  },
  {
    path: '**', redirectTo: ''
  }
];
