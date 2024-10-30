import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SuppliersComponent } from './components/suppliers/suppliers.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'suppliers', component: SuppliersComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
