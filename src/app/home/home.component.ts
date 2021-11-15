
import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  windowScrolled: boolean | undefined;
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
    {a:'assets/black_wallpaper.png',b:'Never Let Your Feelings Get Too Deep, people Can Change Any Time'},
    {a:'assets/imagewith_phone.jpg',b:''},
    {a:'assets/sittingdown_image.jpg',b:''},
    {a:'assets/selfie_image.jpg',b:''},  
    {a:'assets/pool_image.jpg',b:''},
   
    {a:'assets/backside_img.jpg',b:''},
    {a:'https://images.pexels.com/photos/9796484/pexels-photo-9796484.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',b:"There will Be Hard Days, But They Won't last"}
  
  
  ]

  

  ngOnInit(): void {
  }

}
