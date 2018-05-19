import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el:ElementRef) {
    console.log("Directivas llamda")
  }

  @Input("appResaltado") nuevoColor:string;

  @HostListener('mouseenter') mouseEntro(){

    this.resltar( this.nuevoColor || "yellow");
  }

  @HostListener('mouseleave') mouseSalio(){
    this.resltar(null);
  }

  private resltar( color:string ){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
