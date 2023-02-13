import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Object } from '../models/object';
import { ObjectService } from '../services/object.service';

@Component({
  selector: 'app-see-object',
  templateUrl: './see-object.component.html',
  styleUrls: ['./see-object.component.css']
})
export class SeeObjectComponent implements OnInit {

  objectForm: FormGroup;
  object: Object;
  id: String;
  constructor(private formBuilder: FormBuilder, private objectService: ObjectService, private router: Router, private route: ActivatedRoute) { }

 

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');

    this.objectService.getObject(this.id).subscribe(data =>{
      this.object = data;
      this.objectForm = this.formBuilder.group({
        id: [this.object.id, [Validators.required, Validators.nullValidator]],
        name: [this.object.name, [Validators.required, Validators.nullValidator]],
        price: [this.object.price, [Validators.required, Validators.nullValidator]],
        description: [this.object.description, [Validators.required, Validators.nullValidator]],
        units: [this.object.units, [Validators.required, Validators.nullValidator]],
        imageUrl: [this.object.imageUrl, [Validators.required, Validators.nullValidator]]
        //
      });
    })

  }

  return(){
    this.router.navigateByUrl('/principalObject');
  }

}
