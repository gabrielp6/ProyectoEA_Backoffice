import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Denuncia } from '../models/denuncia';
import { DenunciaService } from '../services/denuncia.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar-denuncia.component.html',
  styleUrls: ['./modificar-denuncia.component.css']
})
export class ModificarDenunciaComponent implements OnInit {

  denunciaForm: FormGroup;
  denuncia: Denuncia;
  id: String;
  constructor(private formBuilder: FormBuilder, private denunciaService: DenunciaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.denunciaService.getDenuncia(this.id).subscribe(data =>{
      this.denuncia = data;
      this.denunciaForm = this.formBuilder.group({
        id: [this.denuncia.id, [Validators.required, Validators.nullValidator]],
        idUsuario: [this.denuncia.idUsuario, [Validators.required, Validators.nullValidator]],
        idPublicacion: [this.denuncia.idPublicacion, [Validators.required, Validators.nullValidator]],
        descripcion: [this.denuncia.descripcion, [Validators.required, Validators.nullValidator]]

      });
    })
  }

  get formControls(){
    return this.denunciaForm.controls;
  }

  atras(){
    this.router.navigateByUrl('/principal');
  }

  modificardenuncia(){
    if(this.denunciaForm.invalid){
      return;
    }
    const id = this.denunciaForm.value.id;
    const idUsuario = this.denunciaForm.value.idUsuario;
    const idPublicacion = this.denunciaForm.value.idPublicacion;
    const descripcion = this.denunciaForm.value.descripcion;


    const denunciamodificada = {'id': id, 'idUsuario': idUsuario, "idPublicacion": idPublicacion, "descripcion": descripcion};
    this.denunciaService.modificarDenuncia(denunciamodificada, this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.router.navigateByUrl('/principal');
    })
  }

  delete(){
    const id = this.denunciaForm.value.id;
    this.denunciaService.eliminarDenuncia(id).subscribe(data =>{
      this.router.navigateByUrl('/principal');
    });
  }

}

