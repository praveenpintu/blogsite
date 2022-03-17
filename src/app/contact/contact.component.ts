import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeviceDetectorService, DeviceInfo } from 'ngx-device-detector';
import { MyresumeComponent } from '../myresume/myresume.component';
import { UserInfoComponent } from '../user-info/user-info.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  deviceInfo!: DeviceInfo;
  display:any
  arr=[""]

 constructor(private deviceDetectorServic:DeviceDetectorService,public dialog: MatDialog){ }


  fbbox()
  {
    var a=<HTMLElement> document.getElementById("fbmsg")
    a.style.display="block"

    setTimeout(()=>{  a.style.display="none"},2000)
  }

  Info()
  {
    
    this.dialog.open(UserInfoComponent,{width:'55%',height:'auto',panelClass: ['no-padding', 'no-scrolls'],data:this.deviceInfo})
    var i=0;
    setInterval(() =>
    { i=i+1;
      this.display = this.arr[i] //this.deviceInfo.os
    },6000)
  }


  ngOnInit(): void {

    this.deviceInfo =this.deviceDetectorServic.getDeviceInfo();
        
   
  }

}
