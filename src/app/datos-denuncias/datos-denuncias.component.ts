import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Denuncia } from '../models/denuncia';

@Component({
  selector: 'app-datos-denuncias',
  templateUrl: './datos-denuncias.component.html',
  styleUrls: ['./datos-denuncias.component.css']
})
export class DatosDenunciasComponent implements OnInit {

  @Input()
  denuncia: Denuncia;
  constructor(private router: Router) { }


  ngOnInit(): void {
  }

  ver(){
    this.router.navigate(['verdenuncia/' + this.denuncia.id]);
  }

  modificar(){
    this.router.navigate(['modificardenuncia/' + this.denuncia.id]);
  }


}