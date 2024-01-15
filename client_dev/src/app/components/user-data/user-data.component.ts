import { Component, OnInit } from '@angular/core';

import {Router, ActivatedRoute, Params} from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';

import { Usuario } from 'src/app/models/user';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css'],
  providers: [ProjectService]
})
export class UserDataComponent implements OnInit {
  public user:Usuario;
  public token;
 
  
 

  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _route :ActivatedRoute
  ) { 
    this.user = this._projectService.getIdentity();
    if(JSON.stringify(this.user) == '{}'){
      this._router.navigate(['/inicio']); 
    }
    this.user.usuario = this.user.usuario.toUpperCase();
    this.user.nombre = this.user.nombre.toUpperCase();
    this.user.apellidoP = this.user.apellidoP.toUpperCase();
    this.user.apellidoM = this.user.apellidoM.toUpperCase();
    this.user.correo = this.user.correo.toUpperCase();
    this.user.rfc = this.user.rfc.toUpperCase();
    this.user.rol = this.user.rol.toUpperCase();
    
    this.token = this._projectService.getToken();
    
    

    
  }

  ngOnInit(): void {
    
  }
 
 
}
