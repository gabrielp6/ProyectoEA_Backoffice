import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Denuncia } from '../models/denuncia';
import { DenunciaService } from '../services/denuncia.service';

@Component({
  selector: 'app-ver-denuncia',
  templateUrl: './ver-denuncia.component.html',
  styleUrls: ['./ver-denuncia.component.css']
})
export class VerDenunciaComponent implements OnInit {

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

}
