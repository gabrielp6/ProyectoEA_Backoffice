import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Colony } from '../models/colony';

@Component({
  selector: 'app-data-colonies',
  templateUrl: './data-colonies.component.html',
  styleUrls: ['./data-colonies.component.css']
})
export class DataColoniesComponent implements OnInit {

  @Input()
  colony: Colony;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  see(){
    this.router.navigate(['seeColony/' + this.colony.id]);
  }

  modify(){
    this.router.navigate(['modifyColony/' + this.colony.id]);
  }

}
