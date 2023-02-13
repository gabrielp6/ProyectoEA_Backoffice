import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CatService } from '../services/cat.service';


@Component({
  selector: 'app-newcat',
  templateUrl: './newcat.component.html',
  styleUrls: ['./newcat.component.css']
})
export class NewCatComponent implements OnInit {

  catForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private catService: CatService, private router: Router) { }

  ngOnInit(): void {
    this.catForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.nullValidator]],
      sex: ['', [Validators.required, Validators.nullValidator]],
      weight: ['', [Validators.required, Validators.nullValidator]],
      compatibilities: ['', [Validators.required, Validators.nullValidator]],
      incompatibilities: ['', [Validators.required, Validators.nullValidator]],
      diseases: ['', [Validators.required, Validators.nullValidator]],
    });
  }

  get formControls(){
    return this.catForm.controls;
  }

  async addCat(): Promise<void>{
    if(this.catForm.invalid){
      return;
    }
    const id = "";
    const name = this.catForm.value.name;
    const sex = this.catForm.value.sex;
    const weight = this.catForm.value.weight;
    const compatibilities = this.catForm.value.compatibilities;
    const incompatibilities = this.catForm.value.incompatibilities;
    const diseases = this.catForm.value.diseases;
    const imageUrl = "";
    const colony = null;

    const cat = {'id': id, 'name': name, 'sex': sex, 'weight': weight, "compatibilities": compatibilities, "incompatibilities": incompatibilities, "diseases": diseases, "imageUrl": imageUrl, "colony":colony};
    this.catService.addCat(cat).subscribe(data =>{});
    this.router.navigateByUrl('/principalCat');
  }

  return(){
    this.router.navigateByUrl('/principalCat');
  }

}
