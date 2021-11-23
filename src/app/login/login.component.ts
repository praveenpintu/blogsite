import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user="buddy"
  constructor(public authserviceService:AuthService){}

  async Loginwithgoogle()
  {
    await this.authserviceService.GoogleAuth()

    this.user=this.authserviceService.userNameFun()
  
  }

  ngOnInit(): void {
  }

}
