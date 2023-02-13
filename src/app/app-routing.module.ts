import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { NewUserComponent } from './newuser/newuser.component';
import { ModifyUserComponent } from './modify-user/modify-user.component';
import { SeeUserComponent } from './see-user/see-user.component';
import { PrincipalCatComponent } from './principalCat/principal.component';
import { NewCatComponent } from './newcat/newcat.component';
import { ModifyCatComponent } from './modify-cat/modify-cat.component';
import { SeeCatComponent } from './see-cat/see-cat.component';
import { ModifyObjectComponent } from './modify-object/modify-object.component';
import { ModifyColonyComponent } from './modify-colony/modify-colony.component';
import { SeeObjectComponent } from './see-object/see-object.component';
import { SeeColonyComponent } from './see-colony/see-colony.component';
import { NewObjectComponent } from './newobject/newobject.component';
import { NewColonyComponent } from './newcolony/newcolony.component';
import { PrincipalObjectComponent } from './principalObject/principal.component';
import { PrincipalColonyComponent } from './principalColony/principal.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'principal', component: PrincipalComponent},
  { path: 'login', component: LoginComponent},
  { path: 'principalCat', component: PrincipalCatComponent},
  { path: 'principalColony', component: PrincipalColonyComponent},
  { path: 'principalObject', component: PrincipalObjectComponent},
  { path: 'newUser', component: NewUserComponent},
  { path: 'newCat', component: NewCatComponent},
  { path: 'newColony', component: NewColonyComponent},
  { path: 'newObject', component: NewObjectComponent},
  { path: 'seeUser/:id', component: SeeUserComponent},
  { path: 'seeCat/:id', component: SeeCatComponent},
  { path: 'seeColony/:id', component: SeeColonyComponent},
  { path: 'seeObject/:id', component: SeeObjectComponent},
  { path: 'modifyUser/:id', component: ModifyUserComponent},  
  { path: 'modifyCat/:id', component: ModifyCatComponent},
  { path: 'modifyColony/:id', component: ModifyColonyComponent},
  { path: 'modifyObject/:id', component: ModifyObjectComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
