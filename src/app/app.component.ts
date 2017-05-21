import { Component } from '@angular/core';
import {LoginComponent} from './login/login.component';
import {LoginService} from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginService]
})
export class AppComponent {
  title = 'app works!';
  //login = new LoginData();
  constructor(private loginService: LoginService) {
  }

  login() {
    this.loginService.login();
  }
}
