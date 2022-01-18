import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Publicacion } from '../models/publicacion';
import { PublicacionService } from '../services/publicacion.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar-publicacion.component.html',
  styleUrls: ['./modificar-publicacion.component.css']
})
export class ModificarPublicacionComponent implements OnInit {

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
      });
    })
  }

  get formControls(){
    return this.publicacionForm.controls;
  }

  atras(){
    this.router.navigateByUrl('/principal');
  }

  modificarpublicacion(){
    if(this.publicacionForm.invalid){
      return;
    }
    const id = this.publicacionForm.value.id;
    const idBar = this.publicacionForm.value.idBar;
    const nameBar = this.publicacionForm.value.nameBar;
    const imageBar = this.publicacionForm.value.imageBar;
    const texto = this.publicacionForm.value.texto;
    const imageUrl = this.publicacionForm.value.imageUrl;
    const fecha = this.publicacionForm.value.fecha;

    const publicacionmodificada = {'id': id, 'idBar': idBar, 'nameBar': nameBar, 'imageBar': imageBar, "texto": texto, 'imageUrl': imageUrl, "fecha": fecha};
    this.publicacionService.modificarPublicacion(publicacionmodificada, this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.router.navigateByUrl('/principal');
    })
  }

  delete(){
    const id = this.publicacionForm.value.id;
    this.publicacionService.eliminarPublicacion(id).subscribe(data =>{
      this.router.navigateByUrl('/principal');
    });
  }

}
