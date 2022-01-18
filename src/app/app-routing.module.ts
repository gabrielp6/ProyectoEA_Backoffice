import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModificarbarComponent } from './modificar-bar/modificar-bar.component';
import { NuevobarComponent } from './nuevobar/nuevobar.component';
import { PrincipalComponent } from './principal/principal.component';
import { NuevousuarioComponent } from './nuevousuario/nuevousuario.component';
import { ModificarUsuarioComponent } from './modificar-usuario/modificar-usuario.component';
import { VerUsuarioComponent } from './ver-usuario/ver-usuario.component';
import { VerBarComponent } from './ver-bar/ver-bar.component';
import { NuevacomunidadComponent } from './nuevacomunidad/nuevacomunidad.component';
import { VerComunidadComponent } from './ver-comunidad/ver-comunidad.component';
import { ModificarComunidadComponent } from './modificar-comunidad/modificar-comunidad.component';
import { UsuarioToComunidadComponent } from './usuarioToComunidad/usuarioToComunidad.component';
import { NuevapublicacionComponent } from './nuevapublicacion/nuevapublicacion.component';
import { VerPublicacionComponent } from './ver-publicacion/ver-publicacion.component';
import { ModificarPublicacionComponent } from './modificar-publicacion/modificar-publicacion.component';
import { VerDenunciaComponent } from './ver-denuncia/ver-denuncia.component';
import { NuevadenunciaComponent } from './nuevadenuncia/nuevadenuncia.component';
import { ModificarDenunciaComponent } from './modificar-denuncia/modificar-denuncia.component';
import { Principal2Component } from './principal2/principal2.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/principal' },
  { path: 'principal', component: PrincipalComponent},
  { path: 'nuevobar', component: NuevobarComponent},
  { path: 'verbar/:id', component: VerBarComponent},
  { path: 'modificarbar/:id', component: ModificarbarComponent},
  { path: 'nuevousuario', component: NuevousuarioComponent},
  { path: 'verusuario/:id', component: VerUsuarioComponent},
  { path: 'modificarusuario/:id', component: ModificarUsuarioComponent},
  { path: 'nuevacomunidad', component: NuevacomunidadComponent},
  { path: 'vercomunidad/:id', component: VerComunidadComponent},
  { path: 'modificarcomunidad/:id', component: ModificarComunidadComponent},
  { path: 'usuariotocomunidad', component: UsuarioToComunidadComponent},
  { path: 'nuevapublicacion', component: NuevapublicacionComponent},
  { path: 'modificarpublicacion/:id', component: ModificarPublicacionComponent},
  { path: 'verpublicacion/:id', component: VerPublicacionComponent},
  { path: 'verdenuncia/:id', component: VerDenunciaComponent},
  { path: 'nuevadenuncia', component: NuevadenunciaComponent},
  { path: 'modificardenuncia/:id', component: ModificarDenunciaComponent},
  { path: 'principal2', component: Principal2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
