import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  user="buddy"
  userInfo:string[]=[]
  constructor(public authserviceService:AuthService){}

  async Loginwithgoogle()
  {
    await this.authserviceService.GoogleAuth()

    this.user=this.authserviceService.userNameFun()
    this.userInfo=this.authserviceService.userData()
    console.log("userInfo in login component",this.userInfo)
  
  }

  ngOnInit(): void {
  }

}
