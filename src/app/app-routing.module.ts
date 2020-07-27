import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
	{
		path:'login',
		component:LoginComponent
	},
	{
		path:'buku-alamat',
		// loadChildren:'./manager/manager.module#ManagerModule',
		loadChildren:'./buku-alamat/buku-alamat.module#BukuAlamatModule'
	},
	{
		path:'',
		redirectTo:'login',
		pathMatch:'full'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }