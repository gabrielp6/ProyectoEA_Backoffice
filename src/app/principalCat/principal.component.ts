import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cat } from '../models/cat';
import { CatService } from '../services/cat.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalCatComponent implements OnInit {


  cats: Cat[];
  cats1: Cat[];
  cats2: Cat[];
  cats3: Cat[];
  index: number;


  constructor(private router: Router, private catService: CatService) { }

  ngOnInit(): void {

    this.catService.getCats().subscribe(data => {
      this.cats = data;
      this.cats1 = [];
      this.cats2 = [];
      this.cats3 = [];
      let i: number = 0;
      let y : number = this.cats.length;

    while (i <= y){
      if(i == 0){
        this.cats1.push(this.cats[y - i]);
      }
      if(i == 1){
        this.cats2.push(this.cats[ y - i]);
      }
      if(i == 2){
        this.cats3.push(this.cats[y - i]);
        y = y - 3;
        i = -1;  
      }
       i++;
          
    }



  })




}


newCat() {
  this.router.navigateByUrl('/newCat');
}

}
