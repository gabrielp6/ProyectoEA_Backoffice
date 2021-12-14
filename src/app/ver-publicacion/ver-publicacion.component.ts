import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Publicacion } from '../models/publicacion';
import { PublicacionService } from '../services/publicacion.service';

@Component({
  selector: 'app-ver-publicacion',
  templateUrl: './ver-publicacion.component.html',
  styleUrls: ['./ver-publicacion.component.css']
})
export class VerPublicacionComponent implements OnInit {

  publicacionForm: FormGroup;
  publicacion: Publicacion;
  id: String;
  constructor(private formBuilder: FormBuilder, private publicacionService: PublicacionService, private router: Router, private route: ActivatedRoute) { }

 

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');

    this.publicacionService.getPublicacion(this.id).subscribe(data =>{
      this.publicacion = data;
      this.publicacionForm = this.formBuilder.group({
        id: [this.publicacion.id, [Validators.required, Validators.nullValidator]],
        idBar: [this.publicacion.idBar, [Validators.required, Validators.nullValidator]],
        nameBar: [this.publicacion.nameBar, [Validators.required, Validators.nullValidator]],
        imageBar: [this.publicacion.imageBar, [Validators.required, Validators.nullValidator]],
        texto: [this.publicacion.texto, [Validators.required, Validators.nullValidator]],
        imageUrl: [this.publicacion.imageUrl, [Validators.required, Validators.nullValidator]],
        fecha: [this.publicacion.fecha, [Validators.required, Validators.nullValidator]],
        likes: [this.publicacion.likes, [Validators.required, Validators.nullValidator]]
      });
    })
  }

}
