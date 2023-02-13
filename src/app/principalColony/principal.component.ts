import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Colony } from '../models/colony';
import { ColonyService } from '../services/colony.service';

@Component({
  selector: 'app-principalColony',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalColonyComponent implements OnInit {


  colonies: Colony[];
  colonies1: Colony[];
  colonies2: Colony[];
  colonies3: Colony[];
  index: number;


  constructor(private router: Router, private colonyService: ColonyService) { }

  ngOnInit(): void {

    this.colonyService.getColonies().subscribe(data => {
      this.colonies = data;
      this.colonies1 = [];
      this.colonies2 = [];
      this.colonies3 = [];
      let i: number = 0;
      let y : number = this.colonies.length;

    while (i <= y){
      if(i == 0){
        this.colonies1.push(this.colonies[y - i]);
      }
      if(i == 1){
        this.colonies2.push(this.colonies[ y - i]);
      }
      if(i == 2){
        this.colonies3.push(this.colonies[y - i]);
        y = y - 3;
        i = -1;  
      }
       i++;
          
    }



  })




}


newColony() {
  this.router.navigateByUrl('/newColony');
}

}
