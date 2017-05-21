import { Component, OnInit } from '@angular/core';
import {LoginService} from './../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
t = 't';
constructor(private loginService: LoginService) {
}

  login() {
    if(this.loginService.login()){
      this.t = 'Login: ok!';
    }else{
      this.t = 'Login: failed!';
    };
  }

  ngOnInit() {
  }
}
