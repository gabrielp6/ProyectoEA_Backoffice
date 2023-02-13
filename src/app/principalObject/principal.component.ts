import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Object } from '../models/object';
import { ObjectService } from '../services/object.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalObjectComponent implements OnInit {


  objects: Object[];
  objects1: Object[];
  objects2: Object[];
  objects3: Object[];
  index: number;


  constructor(private router: Router, private objectService: ObjectService) { }

  ngOnInit(): void {

    this.objectService.getObjects().subscribe(data => {
      this.objects = data;
      this.objects1 = [];
      this.objects2 = [];
      this.objects3 = [];
      let i: number = 0;
      let y : number = this.objects.length;

    while (i <= y){
      if(i == 0){
        this.objects1.push(this.objects[y - i]);
      }
      if(i == 1){
        this.objects2.push(this.objects[ y - i]);
      }
      if(i == 2){
        this.objects3.push(this.objects[y - i]);
        y = y - 3;
        i = -1;  
      }
       i++;
          
    }



  })




}


newObject() {
  this.router.navigateByUrl('/newObject');
}

}
