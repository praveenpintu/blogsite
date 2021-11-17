
import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  windowScrolled: boolean | undefined;
  imgBtnClk=0;


  constructor(@Inject(DOCUMENT) private document: Document) {}
  @HostListener("window:scroll", [])
  onWindowScroll() {
      if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
          this.windowScrolled = true;
      } 
     else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
          this.windowScrolled = false;
      }
  }
  scrollToTop() {
      (function smoothscroll() {
          var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
          if (currentScroll > 0) {
              window.requestAnimationFrame(smoothscroll);
              window.scrollTo(0, currentScroll - (currentScroll / 8));
          }
      })();}


  homeFeed=[
    {a:'https://images.pexels.com/photos/6945/sunset-summer-golden-hour-paul-filitchkin.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',b:'Never Let Your Feelings Get Too Deep, people Can Change Any Time'},
    {a:'assets/sittingdown_image.jpg',b:"Just bcz Most Don't Make It Doesn't Meant U Can't "},
    {a:'assets/selfie_image.jpg',b:"Sometimes It's Better To Be Alone, Nobody Can Hurt You"},  
    {a:'assets/pool_image.jpg',b:'If you Get Tired, Learn To Rest, Not Quit'},
    {a:'assets/backside_img.jpg',b:"If No One Hates You, You're Doing Something Boring"}
  
  
  ]

 

  

  ngOnInit(): void {
  }

}
