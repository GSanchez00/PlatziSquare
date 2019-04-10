import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({ //el li significa que solo se aplica a los tags li
    selector: 'li[contar-clicks]' //Como la directiva no recibe parametros no es necesaria ponerla en corchetes cuando se llame
})  
export class ContarClicksDirective{
    numberOfClicks = 0;;
    @HostBinding('style.opacity') 
    opacity:number=.1;
    @HostListener('click', ['$event.target']) 
    onclick(btn){
        console.log('a',btn, "Nro Clicks:", this.numberOfClicks++);
        this.opacity += .1;
    }
}