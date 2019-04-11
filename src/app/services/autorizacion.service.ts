import {Injectable} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
   })
export class AutorizacionService {
    constructor(private  angularFireAuth:AngularFireAuth, private router: Router){
    }
    public login =( email:string ,password:string )=>{
        this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
        .then((response)=>{
            this.router.navigate([""]);
        }).catch((error)=>{
            alert("Ocurrió un error")
            console.log(error);
        })
    }
    public registro =(email:string , password:string, onSuccessGoTo:string="")=>{
        this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
        .then((response)=>{
            alert("Usuario registrado!")
            this.router.navigate([onSuccessGoTo]);
        }).catch((error)=>{
            alert("Ocurrió un error")
            console.log(error);
        })
    }

    public isLoggued()
    {
        return this.angularFireAuth.authState;
    }
}