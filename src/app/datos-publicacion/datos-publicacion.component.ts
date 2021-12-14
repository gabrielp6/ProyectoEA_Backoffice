import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Publicacion } from '../models/publicacion';

@Component({
  selector: 'app-datos-publicacion',
  templateUrl: './datos-publicacion.component.html',
  styleUrls: ['./datos-publicacion.component.css']
})
export class DatosPublicacionComponent implements OnInit {

  @Input()
  publicacion: Publicacion;
  constructor(private router: Router) { }


  ngOnInit(): void {
  }

  ver(){
    this.router.navigate(['verpublicacion/' + this.publicacion.id]);
  }

  modificar(){
    this.router.navigate(['modificarpublicacion/' + this.publicacion.id]);
  }


}
