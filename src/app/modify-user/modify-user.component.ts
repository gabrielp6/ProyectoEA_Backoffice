import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-modify-user',
  templateUrl: './modify-user.component.html',
  styleUrls: ['./modify-user.component.css']
})
export class ModifyUserComponent implements OnInit {

  userForm: FormGroup;
  user: User;
  id: String;
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(this.id).subscribe(data => {
      this.user = data;
      this.userForm = this.formBuilder.group({
        id: [this.user.id, [Validators.required, Validators.nullValidator]],
        username: [this.user.username, [Validators.required, Validators.nullValidator]],
        password: [this.user.password, [Validators.required, Validators.nullValidator]],
        email: [this.user.email, [Validators.required, Validators.nullValidator]],
        imageUrl: [this.user.imageUrl, [Validators.required, Validators.nullValidator]]
        //
      });
    })
  }

  get formControls() {
    return this.userForm.controls;
  }

  return() {
    this.router.navigateByUrl('/principal');
  }

  modifyUser() {
    if (this.userForm.invalid) {
      return;
    }
    const id = this.userForm.value.id;
    const username = this.userForm.value.username;
    const password = this.userForm.value.password;
    const email = this.userForm.value.email;
    const imageUrl = this.userForm.value.imageUrl;

    const userModified = { 'id': id, 'username': username, 'password': password, 'email': email, "name": name, "imageUrl": imageUrl };
    this.userService.modifyUser(userModified, this.route.snapshot.paramMap.get('id')).subscribe(data => { });
    this.router.navigateByUrl('/principal');
  }

   async deleteUser() {

    const id = this.userForm.value.id;
    const username = this.userForm.value.username;
    const password = this.userForm.value.password;
    const email = this.userForm.value.email;
    const imageUrl = this.userForm.value.imageUrl;
    const idUser = this.userForm.value.id;

    const userModified = { 'id': id, 'username': username, 'password': password, 'email': email, "name": name, "imageUrl": imageUrl };
    
    (await this.userService.deleteUser(userModified, idUser)).subscribe(data => {});
    this.router.navigateByUrl('/principal');
  }

  addPermision() {
    if (this.userForm.invalid) {
      return;
    }
    const id = this.userForm.value.id;
    const username = this.userForm.value.username;
    const password = this.userForm.value.password;
    const email = this.userForm.value.email;
    const imageUrl = this.userForm.value.imageUrl;
    const idUser = this.userForm.value.id;

    const userModified = { 'id': id, 'username': username, 'password': password, 'email': email, "name": name, "imageUrl": imageUrl };
    this.userService.addPermission(userModified, idUser).subscribe(data => { });
    this.router.navigateByUrl('/principal');
  }

}
