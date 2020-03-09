import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../service/authentication.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isAuthenticated: boolean;

  constructor(private router: Router, private authenticationService: AuthenticationService) {
  }

  logout() {
    this.authenticationService.logout();
  }

  ngOnInit() {
    this.isAuthenticated = this.readLocalStorageValue();
  }

  readLocalStorageValue(): boolean {

    if (localStorage.getItem("accessToken")) {
      console.log("true");
      return true;
    } else {
      console.log("false");
      return false;
    }
  }
}
