import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PublicacionService } from '../services/publicacion.service';

@Component({
  selector: 'app-nuevapublicacion',
  templateUrl: './nuevapublicacion.component.html',
  styleUrls: ['./nuevapublicacion.component.css']
})
export class NuevapublicacionComponent implements OnInit {

  publicacionForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private publicacionService: PublicacionService, private router: Router) { }

  ngOnInit(): void {
    this.publicacionForm = this.formBuilder.group({
      idBar: ['', [Validators.required, Validators.nullValidator]],
      nameBar: ['', [Validators.required, Validators.nullValidator]],
      imageBar: ['', [Validators.required, Validators.nullValidator]],
      texto: ['', [Validators.required, Validators.nullValidator]],
      imageUrl: ['', [Validators.required, Validators.nullValidator]],
      fecha: ['', [Validators.required, Validators.nullValidator]]
    });
  }

  get formControls(){
    return this.publicacionForm.controls;
  }

  addpublicacion(): void{
    if(this.publicacionForm.invalid){
      return;
    }
    const id = '';
    const idBar = this.publicacionForm.value.idBar;
    const nameBar = this.publicacionForm.value.nameBar;
    const imageBar = this.publicacionForm.value.imageBar;
    const texto = this.publicacionForm.value.texto;
    const imageUrl = this.publicacionForm.value.imageUrl;
    const fecha = this.publicacionForm.value.fecha;



    const publicacion = {'id': id, "idBar": idBar, 'nameBar': nameBar, 'imageBar': imageBar, 'texto': texto, 'imageUrl': imageUrl, 'fecha': fecha};
    this.publicacionService.addPublicacion(publicacion).subscribe(data =>{
      this.router.navigateByUrl('/principal');
    })
  }

  atras(){
    this.router.navigateByUrl('/principal');
  }

}
