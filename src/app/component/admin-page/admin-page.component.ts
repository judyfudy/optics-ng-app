import {Component, OnInit} from '@angular/core';
import {AdminPageService} from "../../service/adminPage.service";
import {User} from "../../model/user";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  users : User[];

  constructor(public adminPageService: AdminPageService) {
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.adminPageService.getAllUsers().subscribe(data => this.users = data);
  }

  changeRole(role, id) {
    this.adminPageService.changeUserRole(role, id);
  }
}
