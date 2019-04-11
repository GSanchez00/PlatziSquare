import { Component } from '@angular/core';
import {AutorizacionService} from "../services/autorizacion.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html'
})
export class RegistroComponent {
    registro: any={};
    constructor (private activatedRoute: ActivatedRoute, private autorizacion: AutorizacionService) {
        
    }
    registrar(){
        this.autorizacion.registro(this.registro.email,this.registro.password);
        
    }
}