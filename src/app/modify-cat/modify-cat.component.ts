import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cat } from '../models/cat';
import { CatService } from '../services/cat.service';

@Component({
  selector: 'app-modify-cat',
  templateUrl: './modify-cat.component.html',
  styleUrls: ['./modify-cat.component.css']
})
export class ModifyCatComponent implements OnInit {

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

  get formControls(){
    return this.catForm.controls;
  }

  return(){
    this.router.navigateByUrl('/principalCat');
  }

  modifyCat(){
    if(this.catForm.invalid){
      return;
    }
    const id = this.catForm.value.id;
    const name = this.catForm.value.name;
    const sex = this.catForm.value.sex;
    const weight = this.catForm.value.weight;
    const compatibilities = this.catForm.value.compatibilities;
    const incompatibilities = this.catForm.value.incompatibilities;
    const diseases = this.catForm.value.diseases;
    const imageUrl = this.catForm.value.imageUrl;
    const colony = this.catForm.value.colony;

    const catModified = {'id': id, 'name': name, 'sex': sex, 'weight': weight, "compatibilities": compatibilities, "incompatibilities": incompatibilities, "diseases": diseases, "imageUrl": imageUrl, "colony":colony, "userId":localStorage.getItem("userEmail")};
    this.catService.modifyCat(catModified, this.route.snapshot.paramMap.get('id')).subscribe(data => {});
    this.router.navigateByUrl('/principalCat');
  }

  deleteCat(){
    
    const id = this.catForm.value.id;
    const name = this.catForm.value.name;
    const sex = this.catForm.value.sex;
    const weight = this.catForm.value.weight;
    const compatibilities = this.catForm.value.compatibilities;
    const incompatibilities = this.catForm.value.incompatibilities;
    const diseases = this.catForm.value.diseases;
    const imageUrl = this.catForm.value.imageUrl;
    const colony = this.catForm.value.colony;

    const catModified = {'id': id, 'name': name, 'sex': sex, 'weight': weight, "compatibilities": compatibilities, "incompatibilities": incompatibilities, "diseases": diseases, "imageUrl": imageUrl, "colony":colony, "userId":localStorage.getItem("userEmail")};
    const idCat = this.catForm.value.id;
    this.catService.deleteCat(catModified, idCat).subscribe(data => {});
      this.router.navigateByUrl('/principalCat');
    
  }

}
