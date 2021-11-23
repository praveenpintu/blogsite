import { Component,HostListener,ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'praveen';

  constructor(public dialog: MatDialog) {  setTimeout(() => { this.login()}, 1000);
}


  login()
  {
    //this.dialog.open(LoginComponent,{disableClose:true,width:'65%',height:'36%'});

  }
}
