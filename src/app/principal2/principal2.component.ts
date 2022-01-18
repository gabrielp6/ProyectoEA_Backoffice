import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario';
import { BarService } from '../services/bar.service';
import { UsuarioService } from '../services/usuario.service';
import { Bar } from '../models/bar';
import { Comunidad } from '../models/comunidad';
import { ComunidadService } from '../services/comunidad.service';
import { Publicacion } from '../models/publicacion';
import { PublicacionService } from '../services/publicacion.service';
import { Denuncia } from '../models/denuncia';
import { DenunciaService } from '../services/denuncia.service';
import { Estadisticas } from '../models/estadisticas';
import { EstadisticasService } from '../services/estadisticas.service';

@Component({
  selector: 'app-principal2',
  templateUrl: './principal2.component.html',
  styleUrls: ['./principal2.component.css']
})
export class Principal2Component implements OnInit {

  publicaciones: Publicacion[];
  denuncias: Denuncia[];

  constructor(private router: Router, private publicacionService: PublicacionService, private denunciaService: DenunciaService) { }

  ngOnInit(): void {

    this.publicacionService.getPublicaciones().subscribe(data =>{
      this.publicaciones = data;
    })

    this.denunciaService.getDenuncias().subscribe(data =>{
      this.denuncias = data;
    })


  }


  principal(){
    this.router.navigateByUrl('/principal');
  }


  nuevaPublicacion(){
    this.router.navigateByUrl('/nuevapublicacion');
  }

  nuevaDenuncia(){
    this.router.navigateByUrl('/nuevadenuncia');
  }

}
