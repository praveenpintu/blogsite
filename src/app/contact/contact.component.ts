import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MyresumeComponent } from '../myresume/myresume.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

 constructor(){}

  fbbox()
  {
    var a=<HTMLElement> document.getElementById("fbmsg")
    a.style.display="block"

    setTimeout(()=>{  a.style.display="none"},2000)
  }

  ngOnInit(): void {
  }

}
