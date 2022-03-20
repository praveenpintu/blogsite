import { UpperCasePipe } from '@angular/common';
import { ThrowStmt } from '@angular/compiler';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClipboardService } from 'ngx-clipboard';
import { delay } from 'rxjs-compat/operator/delay';
import { timeout } from 'rxjs-compat/operator/timeout';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  LoginUserData: any;
  start: boolean = false
  firstLine=''
  secondLine=''
  thirdLine=''
  first:boolean=false
  second:boolean=false
  third:boolean=false
  content="I LOVE YOU PRAVEEN 💗"
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,public authserviceService:AuthService, private clipboardApi: ClipboardService) { }

  ngOnInit(): void {
  
    this.LoginUserData = this.authserviceService.SendDataToUserInfoComponent()
    this.firstLine =" Your Name is "+  this.LoginUserData.displayName + ", Email is "+ this.LoginUserData.email+ " and For Email profile photo "
    this.secondLine= "You Opened Mysite in " + this.data.deviceType + " " + this.data.os_version + " " + this.data.browser +" with Version " +  this.data.browser_version
    this.thirdLine="Your Device - " +this.data.device

    setTimeout(() => this.start = true, 1000)

    this.clipboardApi.copyFromContent(this.content)

    setTimeout(()=>{var a=<HTMLElement> document.getElementById("emoji")
     a.style.textShadow ="0 0 0 red"}
    ,1000)

   
  }
  onTypingAnimationComplete1()
  {
   this.first=true
   var a=<HTMLElement> document.getElementById("emoji")
     a.style.textShadow ="0 0 0 orange"
   setTimeout(() => {
     
   }, 3000);
  }
  onTypingAnimationComplete2()
  {
    var a=<HTMLElement> document.getElementById("link")
    a.style.display="block"

    this.second = true
    var a=<HTMLElement> document.getElementById("emoji")
     a.style.textShadow ="0 0 0 blue"
  }
  
  onTypingAnimationComplete3()
  { 
    this.third = true
    this.playSong()
    var a=<HTMLElement> document.getElementById("emoji")
     a.style.textShadow ="0 0 0 green"
     var a=<HTMLElement> document.getElementById("emoji1")
     a.style.display="block"



  }

  playSong()
  {
    let audio=new Audio();
    audio.src="assets/song.mp3"
    audio.load()
    audio.play();
    audio.volume=0.8
    audio.loop=false
  }
}
