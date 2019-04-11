import {Injectable} from '@angular/core'
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AutorizacionService } from './autorizacion.service';

@Injectable({
    providedIn: 'root',
   })

export class MyGuard implements CanActivate{
    path: import("@angular/router").ActivatedRouteSnapshot[];
    route: import("@angular/router").ActivatedRouteSnapshot;
    loggedIn=false;
    constructor(private autorizacionService: AutorizacionService){
        this.autorizacionService.isLoggued()
        .subscribe((result)=>{
        if(result && result.uid){
            this.loggedIn=true;
        }else{
            this.loggedIn=false;
        }
        }, 
        (error)=>
        {
            this.loggedIn=false;
        })
    }
    canActivate(){
        return this.loggedIn;
    }
}