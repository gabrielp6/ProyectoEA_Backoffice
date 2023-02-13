import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Colony } from '../models/colony';
import { ColonyService } from '../services/colony.service';

@Component({
  selector: 'app-modify-colony',
  templateUrl: './modify-colony.component.html',
  styleUrls: ['./modify-colony.component.css']
})
export class ModifyColonyComponent implements OnInit {

  colonyForm: FormGroup;
  colony: Colony;
  id: String;
  constructor(private formBuilder: FormBuilder, private colonyService: ColonyService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.colonyService.getColony(this.id).subscribe(data => {
      this.colony = data;
      this.colonyForm = this.formBuilder.group({
        id: [this.colony.id, [Validators.required, Validators.nullValidator]],
        name: [this.colony.name, [Validators.required, Validators.nullValidator]],
        locationx: [this.colony.locationx, [Validators.required, Validators.nullValidator]],
        locationy: [this.colony.locationy, [Validators.required, Validators.nullValidator]],
        observations: [this.colony.observations, [Validators.required, Validators.nullValidator]],
        cats: [this.colony.cats, [Validators.required, Validators.nullValidator]],

        //
      });
    })
  }

  get formControls() {
    return this.colonyForm.controls;
  }

  return() {
    this.router.navigateByUrl('/principalColony');
  }

  modifyColony() {
    if (this.colonyForm.invalid) {
      return;
    }
    const id = this.colonyForm.value.id;
    const name = this.colonyForm.value.name;
    const locationx = this.colonyForm.value.locationx;
    const locationy = this.colonyForm.value.locationy;
    const observations = this.colonyForm.value.observations;
    const cats = this.colonyForm.value.cats;

    const colonyModified = { 'id': id, 'name': name, 'locationx': locationx, 'locationy': locationy, "observations": observations, "cats": cats };
    this.colonyService.modifyColony(colonyModified, this.route.snapshot.paramMap.get('id')).subscribe(data => { });
    this.router.navigateByUrl('/principalColony');
  }

  deleteColony() {

    const id = this.colonyForm.value.id;
    const name = this.colonyForm.value.name;
    const locationx = this.colonyForm.value.locationx;
    const locationy = this.colonyForm.value.locationy;
    const observations = this.colonyForm.value.observations;
    const cats = this.colonyForm.value.cats;

    const colonyModified = { 'id': id, 'name': name, 'locationx': locationx, 'locationy': locationy, "observations": observations, "cats": cats };
    const idColony = this.colonyForm.value.id;
    this.colonyService.deleteColony(colonyModified, idColony).subscribe(data => { });
    this.router.navigateByUrl('/principalColony');

  }

}
