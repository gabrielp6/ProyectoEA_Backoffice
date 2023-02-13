import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ObjectService } from '../services/object.service';


@Component({
  selector: 'app-newobject',
  templateUrl: './newobject.component.html',
  styleUrls: ['./newobject.component.css']
})
export class NewObjectComponent implements OnInit {

  objectForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private objectService: ObjectService, private router: Router) { }

  ngOnInit(): void {
    this.objectForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.nullValidator]],
      price: ['', [Validators.required, Validators.nullValidator]],
      description: ['', [Validators.required, Validators.nullValidator]],
      units: ['', [Validators.required, Validators.nullValidator]],
    });
  }

  get formControls(){
    return this.objectForm.controls;
  }

  async addObject(): Promise<void>{
    if(this.objectForm.invalid){
      return;
    }
    const id = "";
    const name = this.objectForm.value.name;
    const imageUrl = "";
    const price = this.objectForm.value.price;
    const description = this.objectForm.value.description;
    const units = this.objectForm.value.units;

    const object = {'id': id, 'name': name, 'imageUrl': imageUrl, 'price': price, "description": description, "units": units};
    this.objectService.addObject(object).subscribe(data =>{});
    this.router.navigateByUrl('/principalObject');
  }

  return(){
    this.router.navigateByUrl('/principalObject');
  }

}
