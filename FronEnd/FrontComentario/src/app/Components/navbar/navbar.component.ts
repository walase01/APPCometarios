import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  img = "https://pluralsight2.imgix.net/paths/images/angular-14a0f6532f.png";
  constructor() { }

  ngOnInit(): void {
  }

}
