import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  homeFeed=[
    {a:'https://material.angular.io/assets/img/examples/shiba2.jpg',b:'hello'},
    {a:'https://material.angular.io/assets/img/examples/shiba2.jpg',b:'hii'},
    {a:'https://material.angular.io/assets/img/examples/shiba2.jpg',b:'hey'}
  
  
  
  ]

  ngOnInit(): void {
  }

}
