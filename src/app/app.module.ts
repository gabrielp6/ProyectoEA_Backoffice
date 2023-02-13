import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { PrincipalCatComponent } from './principalCat/principal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewUserComponent } from './newuser/newuser.component';
import { ModifyUserComponent } from './modify-user/modify-user.component';
import { DataUsersComponent } from './data-users/data-users.component';
import { SeeUserComponent } from './see-user/see-user.component';
import { DataCatsComponent } from './data-cats/data-cats.component';
import { NewCatComponent } from './newcat/newcat.component';
import { ModifyCatComponent } from './modify-cat/modify-cat.component';
import { PrincipalColonyComponent } from './principalColony/principal.component';
import { PrincipalObjectComponent } from './principalObject/principal.component';
import { SeeColonyComponent } from './see-colony/see-colony.component';
import { SeeObjectComponent } from './see-object/see-object.component';
import { SeeCatComponent } from './see-cat/see-cat.component';
import { DataObjectsComponent } from './data-objects/data-objects.component';
import { DataColoniesComponent } from './data-colonies/data-colonies.component';
import { ModifyObjectComponent } from './modify-object/modify-object.component';
import { ModifyColonyComponent } from './modify-colony/modify-colony.component';
import { NewObjectComponent } from './newobject/newobject.component';
import { NewColonyComponent } from './newcolony/newcolony.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    PrincipalCatComponent,
    PrincipalColonyComponent,
    PrincipalObjectComponent,
    NewUserComponent,
    NewCatComponent,
    NewColonyComponent,
    NewObjectComponent,
    ModifyUserComponent,
    ModifyCatComponent,
    ModifyColonyComponent,
    ModifyObjectComponent,
    DataUsersComponent,
    DataCatsComponent,
    DataColoniesComponent,
    DataObjectsComponent,
    SeeUserComponent,
    SeeCatComponent,
    SeeObjectComponent,
    SeeColonyComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
