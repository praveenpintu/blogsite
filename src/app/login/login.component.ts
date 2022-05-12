import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { AuthService } from '../services/auth.service';
import { HttpClient  } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  user="buddy"
  userInfo:string[]=[]
  content="I LOVE YOU PRAVEEN 💗"
  useremail=''

  constructor(public authserviceService:AuthService ,public clipboardApi: ClipboardService,private http:HttpClient){}

  async Loginwithgoogle()
  {
    await this.authserviceService.GoogleAuth()

    this.user=this.authserviceService.userNameFun()
    this.userInfo=this.authserviceService.userData()
    this.useremail=this.authserviceService.userEmail()
      
  }
  close()
  { 
    this.clipboardApi.copyFromContent(this.content)
    this.getIPAddress()


  }

   makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }

  getIPAddress()
  {
    this.http.get("https://api.ipify.org/?format=json").subscribe((res:any)=>{

      this.authserviceService.addNewUser(this.makeid(),this.useremail,res.ip,this.userInfo)
      
    });
   
  }
  playSong()
  {
    let audio=new Audio();
    audio.src="assets/song1.mp3"
    audio.load()
    audio.play();
    audio.volume=0.8
    audio.loop=false

  }

  ngOnInit(): void {   
  }

}
