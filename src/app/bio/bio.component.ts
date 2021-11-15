import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})

export class BioComponent implements OnInit {
  clickTimes=0;
 

  constructor() {
   
  }

  familybox(){
    this.clickTimes=this.clickTimes+1
    const a=<HTMLElement> document.getElementById("family")
    a.style.display="block";
    
    if(this.clickTimes%2==0)
    {
      const a=<HTMLElement> document.getElementById("family")
      a.style.display="none";
    }

  }
  familyclose()
  {
    
    const a=<HTMLElement> document.getElementById("family")
    a.style.display="none";
  }
  family: string[] = [
    'Grandpa',
    'Grandma',
    'Father',
    'Mother',
    'Akka',
    'Mama',
    'Brother',
    'Bava1',
    'Bava2']
  

  ngOnInit(): void {
   
  }

  open(){
    
    const a=<HTMLElement> document.getElementById("popBox")
    a.style.display="block";

  }
  close(){
    const a=<HTMLElement> document.getElementById("popBox")
    a.style.display="none";


  }

}
