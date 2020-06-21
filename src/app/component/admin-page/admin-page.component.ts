import {Component, OnInit} from '@angular/core';
import {AdminPageService} from "../../service/adminPage.service";
import {User} from "../../model/user";
import {FormBuilder, FormGroup} from "@angular/forms";

export interface PeriodicElement {
  credentials: string;
  position: number;
  username: number;
  email: string;
  userType: string;
  role: string;
}

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  users: User[];
  displayedColumns: string[] = ['position', 'credentials', 'username', 'email', 'userType', 'role'];
  productForm: FormGroup;
  loading = false;


  constructor(public adminPageService: AdminPageService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.getAllUsers();

    this.productForm = this.formBuilder.group({
      price: [''],
      quantity: [''],
      productTypeId: [''],
      name: [''],
      description: [''],
      photo: [''],
      brand: [''],
      model: [''],
    });
  }

  getAllUsers() {
    this.adminPageService.getAllUsers().subscribe(data => this.users = data);
  }

  changeRole(role, id) {
    this.adminPageService.changeUserRole(role, id);
  }

  get f() {
    return this.productForm.controls;
  }

  onSubmit() {
    this.loading = true;
    this.adminPageService.addNewProduct(this.productForm.value).subscribe();
  }
}
