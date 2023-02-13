import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Object } from '../models/object';

@Component({
  selector: 'app-data-objects',
  templateUrl: './data-objects.component.html',
  styleUrls: ['./data-objects.component.css']
})
export class DataObjectsComponent implements OnInit {

  @Input()
  object: Object;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  see(){
    this.router.navigate(['seeObject/' + this.object.id]);
  }

  modify(){
    this.router.navigate(['modifyObject/' + this.object.id]);
  }

}
