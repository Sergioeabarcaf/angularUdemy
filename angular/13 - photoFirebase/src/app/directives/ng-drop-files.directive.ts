import { Directive, EventEmitter, ElementRef, HostListener, Input, Output } from '@angular/core';


@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

  @Output() mouseSobre: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  @HostListener('dragover',['$event'])
  public ondragenter( event:any ){
    this.mouseSobre.emit(true);
  }

  @HostListener('dragleave',['$event'])
  public ondragleave( event:any ){
    this.mouseSobre.emit(false);
  }
}
