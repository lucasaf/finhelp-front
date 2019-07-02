import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './../../shared/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  formModel = {
    UserName : '',
    Password : ''
  }
  constructor(private service: UserService, private router: Router, private toast : ToastrService) { }

  ngOnInit() {
    if(localStorage.getItem('token')!=null)
      this.router.navigateByUrl('/home');
  }

  onSubmit(form:NgForm){
    this.service.login(form.value).subscribe(
      (res:any) =>{
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/home');
      },
      err =>{
        if(err.status == 400)
          this.toast.error('Usuário ou senha incorretos.','Erro de Autenticação');
        else
          console.log(err);
      }
    );
  }
}
