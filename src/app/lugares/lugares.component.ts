import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {
  title = 'platzisquare';
  lugares=null;
  constructor(private lugaresService: LugaresService, private router: Router){
    //Firebase retorna una promesa, por lo tanto hay que subscribirse
    lugaresService.getLugares()
        .subscribe(lugares=>{ 
          this.lugares=lugares;
        });
  }

  /*
  go(){
    this.router.navigate(['/detalle/1'], { queryParams: { action: 'edit' } });
  }
  */
}