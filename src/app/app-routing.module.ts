import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  // Другие маршруты
  { path: 'create-profile', component: CreateProfileComponent },
  { path: 'user-list', component: UserListComponent },
  // Другие маршруты
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
