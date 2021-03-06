import { Component } from '@angular/core';
import { AutorizacionService } from './services/autorizacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn=false;
  constructor(private autorizacionService:AutorizacionService){
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
}
