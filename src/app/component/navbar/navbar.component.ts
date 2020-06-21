import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../service/authentication.service";
import * as jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isAuthenticated: boolean;
  isAdmin: boolean;

  constructor(private router: Router, private authenticationService: AuthenticationService) {
  }

  logout() {
    this.authenticationService.logout();
  }

  ngOnInit() {
    this.isAuthenticated = this.readLocalStorageValue();
    this.isAdmin = this.getSubFromJwt();
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


  getSubFromJwt():boolean {
    var token = localStorage.getItem("accessToken");
    var decodedToken = jwt_decode(token);
    var admin = decodedToken['sub'];

    return admin === 'ADMIN';
  }

}
