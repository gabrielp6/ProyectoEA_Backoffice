import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewUserComponent implements OnInit {

  userForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.nullValidator]],
      password: ['', [Validators.required, Validators.nullValidator]],
      email: ['', [Validators.required, Validators.nullValidator]],
    });
  }

  get formControls() {
    return this.userForm.controls;
  }

  async addUser(): Promise<void> {
    if (this.userForm.invalid) {
      return;
    }
    const id = "";
    const username = this.userForm.value.username;
    const password = this.userForm.value.password;
    const email = this.userForm.value.email;
    const imageUrl = "";

    const user = { 'id': id, 'username': username, 'password': password, 'email': email, "name": name, "imageUrl": imageUrl};
    await (await this.userService.addUser(user)).subscribe(data => { });
    await this.router.navigateByUrl('/principal');
  }

  return() {
    this.router.navigateByUrl('/principal');
  }

}
