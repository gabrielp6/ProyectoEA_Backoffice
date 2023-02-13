import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-see-user',
  templateUrl: './see-user.component.html',
  styleUrls: ['./see-user.component.css']
})
export class SeeUserComponent implements OnInit {

  userForm: FormGroup;
  user: User;
  id: String;
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, private route: ActivatedRoute) { }

 

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');

    this.userService.getUser(this.id).subscribe(data =>{
      this.user = data;
      this.userForm = this.formBuilder.group({
        id: [this.user.id, [Validators.required, Validators.nullValidator]],
        username: [this.user.username, [Validators.required, Validators.nullValidator]],
        password: [this.user.password, [Validators.required, Validators.nullValidator]],
        email: [this.user.email, [Validators.required, Validators.nullValidator]],
        imageUrl: [this.user.imageUrl, [Validators.required, Validators.nullValidator]]
      });
    })

  }

  return(){
    this.router.navigateByUrl('/principal');
  }

}
