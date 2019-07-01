import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'hub', canActivate: [AuthGuard], loadChildren: './hub/hub.module#HubPageModule' },
  { path: 'device-details/:deviceId', canActivate: [AuthGuard], loadChildren: './device-details/device-details.module#DeviceDetailsPageModule' },
  { path: 'user-devices', canActivate: [AuthGuard], loadChildren: './user-devices/user-devices.module#UserDevicesPageModule' },
  { path: 'list-users', canActivate: [AuthGuard], loadChildren: './list-users/list-users.module#ListUsersPageModule' },
  { path: 'list-user-devices/:userId', canActivate: [AuthGuard], loadChildren: './list-user-devices/list-user-devices.module#ListUserDevicesPageModule' },
  { path: 'associate-devices', canActivate: [AuthGuard], loadChildren: './associate-devices/associate-devices.module#AssociateDevicesPageModule' },
  { path: 'select-devices/:userId', canActivate: [AuthGuard], loadChildren: './select-devices/select-devices.module#SelectDevicesPageModule' },
  { path: 'display-graph', canActivate: [AuthGuard], loadChildren: './display-graph/display-graph.module#DisplayGraphPageModule' },
  { path: 'callback', loadChildren: './callback/callback.module#CallbackPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
