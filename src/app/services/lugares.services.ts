import {Injectable} from '@angular/core'
import { AngularFireAction, AngularFireDatabase } from '@angular/fire/database';
@Injectable({
    providedIn: 'root',
   })
export class LugaresService{
    private lugares: any = [
        {id:1, plan:"pagado", cercania: 1, active: true, nombre: 'Floreria del Jardin'},
        {id:2, plan:"no-pagado", cercania: 1, active: true, nombre: 'Donas donut'},
        {id:3, plan:"no-pagado", cercania: 2, active: true, nombre: 'Veterinaria Huellita Feliz'},
        {id:4, plan:"pagado", cercania: 2, active: true, nombre: 'Sushi Sushiroll'},
        {id:5, plan:"no-pagado", cercania: 3, active: true, nombre: 'Hotel La Gracias'},
        {id:6, plan:"no-pagado", cercania: 3, active: true, nombre: 'Iglesia Dios es amor'}
      ];
    
      constructor(private firebaseDb: AngularFireDatabase){

      }
      public getLugares(){
          //this.firebaseDb.object("lugares/"+ lugar.id);
          return this.firebaseDb.list("lugares/").valueChanges();
      }
      public getLugarById(id){
        return this.firebaseDb.object("lugares/"+ id);
      }
      public buscarLugar(id){
        return this.lugares.filter((lugar) => {return lugar.id==id})[0] || null;
      }
      public guardarLugar(lugar){
        lugar.id=Date.now();   
        this.firebaseDb.database.ref("lugares/" + lugar.id).set(lugar);
      }
}