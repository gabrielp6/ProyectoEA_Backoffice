import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cat } from '../models/cat';

@Component({
  selector: 'app-data-cats',
  templateUrl: './data-cats.component.html',
  styleUrls: ['./data-cats.component.css']
})
export class DataCatsComponent implements OnInit {

  @Input()
  cat: Cat;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  see(){
    this.router.navigate(['seeCat/' + this.cat.id]);
  }

  modify(){
    this.router.navigate(['modifyCat/' + this.cat.id]);
  }

}
