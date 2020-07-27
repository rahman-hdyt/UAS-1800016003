import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BukuAlamatComponent } from './buku-alamat.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialDesign} from '../material/material';


const routes:Routes=[
  {
    path:'app',
    component:BukuAlamatComponent,
    // children:[
      
    // ]
  },
  {
    path:'',
    redirectTo:'app',
    pathMatch:'full'
  } 
]

@NgModule({
  declarations: [BukuAlamatComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign,
  ],
})
export class BukuAlamatModule { }
