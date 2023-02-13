import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {


  users: User[];
  users1: User[];
  users2: User[];
  users3: User[];
  index: number;


  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {

    this.userService.getUsers().subscribe(data => {
      this.users = data;
      this.users1 = [];
      this.users2 = [];
      this.users3 = [];
      let i: number = 0;
      let y: number = this.users.length;

      while (i <= y) {
        if (i == 0) {
          this.users1.push(this.users[y - i]);
        }
        if (i == 1) {
          this.users2.push(this.users[y - i]);
        }
        if (i == 2) {
          this.users3.push(this.users[y - i]);
          y = y - 3;
          i = -1;
        }
        i++;

      }
    })
  }


  newUser() {
    this.router.navigateByUrl('/newUser');
  }

}
