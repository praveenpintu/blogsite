import { Component,HostListener,ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClipboardService } from 'ngx-clipboard';
import { LoginComponent } from './login/login.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'praveen';
  content="I LOVE YOU PRAVEEN 💗"


  constructor(public dialog: MatDialog,private clipboardApi: ClipboardService) { 
}

ngOnInit(): void {
  this.dialog.open(LoginComponent,{disableClose:true,width:'65%',height:'auto'});
  
  this.clipboardApi.copyFromContent(this.content)


}

  
}
