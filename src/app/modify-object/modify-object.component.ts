import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Object } from '../models/object';
import { ObjectService } from '../services/object.service';

@Component({
  selector: 'app-modify-object',
  templateUrl: './modify-object.component.html',
  styleUrls: ['./modify-object.component.css']
})
export class ModifyObjectComponent implements OnInit {

  objectForm: FormGroup;
  object: Object;
  id: String;
  constructor(private formBuilder: FormBuilder, private objectService: ObjectService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.objectService.getObject(this.id).subscribe(data => {
      this.object = data;
      this.objectForm = this.formBuilder.group({
        id: [this.object.id, [Validators.required, Validators.nullValidator]],
        name: [this.object.name, [Validators.required, Validators.nullValidator]],
        imageUrl: [this.object.imageUrl, [Validators.required, Validators.nullValidator]],
        price: [this.object.price, [Validators.required, Validators.nullValidator]],
        description: [this.object.description, [Validators.required, Validators.nullValidator]],
        units: [this.object.units, [Validators.required, Validators.nullValidator]]
        //
      });
    })
  }

  get formControls() {
    return this.objectForm.controls;
  }

  return() {
    this.router.navigateByUrl('/principalObject');
  }

  modifyObject() {
    if (this.objectForm.invalid) {
      return;
    }
    const id = this.objectForm.value.id;
    const name = this.objectForm.value.name;
    const imageUrl = this.objectForm.value.imageUrl;
    const price = this.objectForm.value.price;
    const description = this.objectForm.value.description;
    const units = this.objectForm.value.units;

    const objectModified = { 'id': id, 'name': name, 'imageUrl': imageUrl, 'price': price, "description": description, "units": units };
    this.objectService.modifyObject(objectModified, this.route.snapshot.paramMap.get('id')).subscribe(data => { });
    this.router.navigateByUrl('/principalObject');
  }

  deleteObject() {

    const id = this.objectForm.value.id;
    const name = this.objectForm.value.name;
    const imageUrl = this.objectForm.value.imageUrl;
    const price = this.objectForm.value.price;
    const description = this.objectForm.value.description;
    const units = this.objectForm.value.units;

    const objectModified = { 'id': id, 'name': name, 'imageUrl': imageUrl, 'price': price, "description": description, "units": units };

    const idObject = this.objectForm.value.id;
    this.objectService.deleteObject(objectModified, idObject).subscribe(data => { });
    this.router.navigateByUrl('/principalObject');

  }

}
