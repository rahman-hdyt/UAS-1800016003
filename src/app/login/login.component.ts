import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    public router:Router
  ) { }

  ngOnInit() {
  }
  data:any={};
  masuk(data)
  {
    if(data.username == 'rhidayat@gmail.com', data.password == 12345)
    {
      this.router.navigate(['/buku-alamat']);
    }
    else{
      alert("Akun tidak terdaftar!");
    }
    if(data.username == null)
    {
      alert("Email Tidak Boleh Kosong!");
    }
    if(data.password == null)
    {
      alert("Password Tidak Boleh Kosong!");
    }
  }

}