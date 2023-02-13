import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Colony } from '../models/colony';
import { ColonyService } from '../services/colony.service';

@Component({
  selector: 'app-see-colony',
  templateUrl: './see-colony.component.html',
  styleUrls: ['./see-colony.component.css']
})
export class SeeColonyComponent implements OnInit {

  colonyForm: FormGroup;
  colony: Colony;
  id: String;
  constructor(private formBuilder: FormBuilder, private colonyService: ColonyService, private router: Router, private route: ActivatedRoute) { }

 

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');

    this.colonyService.getColony(this.id).subscribe(data =>{
      this.colony = data;
      this.colonyForm = this.formBuilder.group({
        id: [this.colony.id, [Validators.required, Validators.nullValidator]],
        name: [this.colony.name, [Validators.required, Validators.nullValidator]],
        locationx: [this.colony.locationx, [Validators.required, Validators.nullValidator]],
        locationy: [this.colony.locationy, [Validators.required, Validators.nullValidator]],
        observations: [this.colony.observations, [Validators.required, Validators.nullValidator]],
        //
      });
    })

  }

  return(){
    this.router.navigateByUrl('/principalColony');
  }



}
