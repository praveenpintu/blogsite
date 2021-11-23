import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MyresumeComponent } from '../myresume/myresume.component';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  resume(){ this.dialog.open(MyresumeComponent,{width:'auto',height:'auto'});
  }

  ngOnInit(): void {
  }

}
