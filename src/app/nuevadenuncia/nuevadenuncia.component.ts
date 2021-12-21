import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DenunciaService } from '../services/denuncia.service';

@Component({
  selector: 'app-nuevadenuncia',
  templateUrl: './nuevadenuncia.component.html',
  styleUrls: ['./nuevadenuncia.component.css']
})
export class NuevadenunciaComponent implements OnInit {

  denunciaForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private denunciaService: DenunciaService, private router: Router) { }

  ngOnInit(): void {
    this.denunciaForm = this.formBuilder.group({
      idUsuario: ['', [Validators.required, Validators.nullValidator]],
      idPublicacion: ['', [Validators.required, Validators.nullValidator]],
      descripcion: ['', [Validators.required, Validators.nullValidator]]
    });
  }

  get formControls(){
    return this.denunciaForm.controls;
  }

  adddenuncia(): void{
    if(this.denunciaForm.invalid){
      return;
    }
    const id = '';
    const idUsuario = this.denunciaForm.value.idUsuario;
    const idPublicacion = this.denunciaForm.value.idPublicacion;
    const descripcion = this.denunciaForm.value.descripcion;



    const denuncia = {'id': id, 'idUsuario': idUsuario, 'idPublicacion': idPublicacion, 'descripcion': descripcion};
    this.denunciaService.addDenuncia(denuncia).subscribe(data =>{
      this.router.navigateByUrl('/principal');
    })
  }

  atras(){
    this.router.navigateByUrl('/principal');
  }

}
