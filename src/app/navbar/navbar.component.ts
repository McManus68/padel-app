import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'padel-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isIn = false;

  constructor() { }

  ngOnInit() {
  }

  toggleState() { // click handler
        let bool = this.isIn;
        this.isIn = bool === false ? true : false;
    }

}
