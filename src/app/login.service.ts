import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() { }
  login():boolean{
    console.log("login successed!");
    return true;
  }
}
