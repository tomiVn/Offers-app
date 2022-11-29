import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../middlewear/auth.guard';
import { EditComponent } from './edit/edit.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
   
{ path: ':userId/profile', component: ProfileComponent, canActivate: [AuthGuard], title: 'Profile' },
{ path: ':userId/edit', component: EditComponent, canActivate: [AuthGuard], title: 'Edit' },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class UserRoutingModule { }