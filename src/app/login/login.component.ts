import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.nullValidator]],
      email: ['', [Validators.required, Validators.nullValidator]]
    });
  }

  get formControls(){
    return this.userForm.controls;
  }

  async login(): Promise<void>{
    if(this.userForm.invalid){
      return;
    }
    const id = "";
    const username = "";
    const password = this.userForm.value.password;
    const email = this.userForm.value.email;
    const imageUrl = "";

    const user = {'id': id, 'username': username, 'password': password, 'email': email, "name": name, "imageUrl": imageUrl};
    localStorage.setItem("userEmail", email);
    this.userService.login(user).subscribe(data =>{});
    this.router.navigateByUrl('/principal');
  }

}
