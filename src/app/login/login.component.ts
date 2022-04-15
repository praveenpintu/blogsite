import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  user="buddy"
  userInfo:string[]=[]
  content="I LOVE YOU PRAVEEN 💗"

  constructor(public authserviceService:AuthService ,public clipboardApi: ClipboardService){}

  async Loginwithgoogle()
  {
    await this.authserviceService.GoogleAuth()

    this.user=this.authserviceService.userNameFun()
    this.userInfo=this.authserviceService.userData()
    


    if(this.user != "buddy")
    this.playSong()
  
  }
  close()
  { 
    this.clipboardApi.copyFromContent(this.content)
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
