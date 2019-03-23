import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path: '', redirectTo: 'userslist', pathMatch: 'full' },
  { path: 'userslist', component: UsersComponent },
  { path: 'users/:id', component: UserdetailsComponent },
  { path: '**', redirectTo: 'userslist' }
];


@NgModule({
  declarations: [],
  imports: [
  RouterModule.forRoot(routes),
    CommonModule
  ],

   exports: [ RouterModule ]
})
export class AppRoutingModule { }
