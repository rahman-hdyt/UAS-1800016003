import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialDesign} from './material/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BukuAlamatModule} from './buku-alamat/buku-alamat.module';
import {MatDialogModule} from '@angular/material/dialog';
 import {MatFormFieldModule} from '@angular/material/form-field';
 import {MatInputModule} from '@angular/material/input';
 import { HttpClientModule } from '@angular/common/http';
 import { TambahAlamatComponent } from './buku-alamat/tambah-alamat/tambah-alamat.component';
 import { FormsModule ,  ReactiveFormsModule} from '@angular/forms';
 import { DetailAlamatComponent } from './buku-alamat/detail-alamat/detail-alamat.component';
 import { DialogKonfirmasiComponent } from './buku-alamat/dialog-konfirmasi/dialog-konfirmasi.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TambahAlamatComponent,
    DetailAlamatComponent, 
    DialogKonfirmasiComponent,
  ],
  entryComponents:[
    TambahAlamatComponent,
    DetailAlamatComponent, 
    DialogKonfirmasiComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesign,
    BukuAlamatModule,
   ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }