import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cat } from '../models/cat';
import { CatService } from '../services/cat.service';

@Component({
  selector: 'app-see-cat',
  templateUrl: './see-cat.component.html',
  styleUrls: ['./see-cat.component.css']
})
export class SeeCatComponent implements OnInit {

  catForm: FormGroup;
  cat: Cat;
  id: String;
  constructor(private formBuilder: FormBuilder, private catService: CatService, private router: Router, private route: ActivatedRoute) { }

 

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');

    this.catService.getCat(this.id).subscribe(data =>{
      this.cat = data;
      this.catForm = this.formBuilder.group({
        id: [this.cat.id, [Validators.required, Validators.nullValidator]],
        name: [this.cat.name, [Validators.required, Validators.nullValidator]],
        sex: [this.cat.sex, [Validators.required, Validators.nullValidator]],
        weight: [this.cat.weight, [Validators.required, Validators.nullValidator]],
        compatibilities: [this.cat.compatibilities, [Validators.required, Validators.nullValidator]],
        incompatibilities: [this.cat.incompatibilities, [Validators.required, Validators.nullValidator]],
        diseases: [this.cat.diseases, [Validators.required, Validators.nullValidator]],
        imageUrl: [this.cat.imageUrl, [Validators.required, Validators.nullValidator]],
        colony: [this.cat.colony, [Validators.required, Validators.nullValidator]]
        //
      });
    })

  }

  return(){
    this.router.navigateByUrl('/principalCat');
  }

}
