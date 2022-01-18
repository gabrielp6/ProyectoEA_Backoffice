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
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  bares: Bar[];
  usuarios : Usuario[];
  comunidades: Comunidad[];
  estadisticas: Estadisticas[];

  constructor(private router: Router, private estadisticasService: EstadisticasService, private barService : BarService, private usuarioService : UsuarioService, private comunidadService: ComunidadService) { }

  ngOnInit(): void {

    this.barService.getBares().subscribe(data =>{
      this.bares = data;
    })

    this.usuarioService.getUsuarios().subscribe(data =>{
      this.usuarios = data;
    })

    this.comunidadService.getComunidades().subscribe(data =>{
      this.comunidades = data;
    })

    this.estadisticasService.getEstadisticas().subscribe(data =>{
      this.estadisticas = data;
    })
  }



  principal2(){
    this.router.navigateByUrl('/principal2');
  }

  nuevoBar(){
    this.router.navigateByUrl('/nuevobar');
  }

  nuevoUsuario(){
    this.router.navigateByUrl('/nuevousuario');
  }

  nuevaComunidad(){
    this.router.navigateByUrl('/nuevacomunidad');
  }

  usuarioToComunidad(){
    this.router.navigateByUrl('/usuariotocomunidad');
  }

}
