import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {User} from "../../model/user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public user: User;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getAuthenticatedUserInfo().subscribe(data => this.user = data);
  }
}
