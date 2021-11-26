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

<<<<<<< HEAD
  constructor(public dialog: MatDialog) { 
=======
  constructor(public dialog: MatDialog) {  setTimeout(() => { this.login()}, 100);
>>>>>>> 0590bbcbc8a57709113289e1eaa6dfa9648a2c91
}

ngOnInit(): void {
  this.dialog.open(LoginComponent,{disableClose:true,width:'65%',height:'auto'});

}

  
}
