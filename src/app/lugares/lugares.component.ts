import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../services/lugares.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent implements OnInit {
  title = 'platzisquare';
  lugares=null;
  constructor(private lugaresService: LugaresService, private router: Router){

  }

  ngOnInit() {
    //Firebase retorna una promesa, por lo tanto hay que subscribirse
    this.lugaresService.getLugares()
        .subscribe(lugares=>{ 
          this.lugares=lugares;
        });
  }

  eliminar(id, nombre){
    if(confirm("Esta seguro de borrar el lugar "+ nombre)) {
      this.lugaresService.eliminarLugar(id);
      this.ngOnInit();
    }

  }
  /*
  go(){
    this.router.navigate(['/detalle/1'], { queryParams: { action: 'edit' } });
  }
  */
}