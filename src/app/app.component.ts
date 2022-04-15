import { Component,HostListener,ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClipboardService } from 'ngx-clipboard';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'praveen';

  constructor(public dialog: MatDialog,public authserviceService:AuthService) { 
}

logout(a:any)
{
let dialogref=this.dialog.open(a,{disableClose:true,width:'50%',height:'auto',panelClass: ['no-scroll']})
}
closeButton()
{

window.close()
window.location.reload()

}

ngOnInit(): void {
 this.dialog.open(LoginComponent,{disableClose:true,width:'65%',height:'auto'});
  


}

  
}
