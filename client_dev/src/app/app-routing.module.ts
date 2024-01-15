
import { ModuleWithProviders, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserGuard} from './services/user.guard'


import { IndexComponent } from './components/index/index.component';
import { VendorsComponent } from './components/vendors/vendors.component';
import { ArchivesComponent } from './components/archives/archives.component';
import { RegisterComponent } from './components/register/register.component';
import { UserDataComponent } from './components/user-data/user-data.component';
import { RegisterUsuariosComponent } from './components/register-usuarios/register-usuarios.component';
import { RecuperarInfoComponent } from './components/recuperar-info/recuperar-info.component';


const routes: Routes = [
  {path: '', component:IndexComponent},
  {path: 'inicio', component: IndexComponent},
  {path: 'datos', component:UserDataComponent},
  {path: 'proveedores', component: VendorsComponent, canActivate:[UserGuard]},
  {path: 'archivos', component: ArchivesComponent, canActivate:[UserGuard]},
  {path: 'registro', component: RegisterComponent},
  {path: 'proveedor/:id', component: ArchivesComponent, canActivate:[UserGuard]},
  {path: 'recuperar-info/:rfc/:correo',component: RecuperarInfoComponent},
  {path: 'registro-usuarios', component: RegisterUsuariosComponent, canActivate:[UserGuard]},
  {path: '**', component: IndexComponent}
];

export const appRoutingProviders:any[] = [];
export const routing: ModuleWithProviders<any> =RouterModule.forRoot(routes);