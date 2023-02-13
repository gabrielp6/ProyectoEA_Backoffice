import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ColonyService } from '../services/colony.service';


@Component({
  selector: 'app-newcolony',
  templateUrl: './newcolony.component.html',
  styleUrls: ['./newcolony.component.css']
})
export class NewColonyComponent implements OnInit {

  colonyForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private colonyService: ColonyService, private router: Router) { }

  ngOnInit(): void {
    this.colonyForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.nullValidator]],
      locationx: ['', [Validators.required, Validators.nullValidator]],
      locationy: ['', [Validators.required, Validators.nullValidator]],
      observations: ['', [Validators.required, Validators.nullValidator]],
    });
  }

  get formControls(){
    return this.colonyForm.controls;
  }

  async addColony(): Promise<void>{
    if(this.colonyForm.invalid){
      return;
    }
    const id = "";
    const name = this.colonyForm.value.name;
    const locationx = this.colonyForm.value.locationx;
    const locationy = this.colonyForm.value.locationy;
    const observations = this.colonyForm.value.observations;

    const colony = {'id': id, 'name': name, 'locationx': locationx, 'locationy': locationy, "observations": observations, cats: []};
    this.colonyService.addColony(colony).subscribe(data =>{});
    this.router.navigateByUrl('/principalColony');
  }

  return(){
    this.router.navigateByUrl('/principalColony');
  }

}
