import { Component } from '@angular/core';
import {AutorizacionService} from "../services/autorizacion.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    login: any={};
    constructor(private autorizacionService:AutorizacionService){
    }
    autenticar(){
        this.autorizacionService.login(this.login.email,this.login.password);
    }
}