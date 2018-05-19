import { Directive, EventEmitter, ElementRef, HostListener, Input, Output } from '@angular/core';
import { FileItem } from '../models/file-item';


@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

  @Input() archivos:FileItem[] = [];

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

  //Validaciones

  private archivoPuedeCargarlo( archivo: File ): boolean{
    if(!this._archivoDropeado(archivo.name) && this._tipoArchivo( archivo.type)){
      return true;
    }
    else{
      return false;
    }
  }

  private _prevenirDetener( event ){
    event.preventDefault();
    event.stopPropagation();
  }

  private _archivoDropeado( nombreArchivo:string):boolean{
    for(const archivo of this.archivos){
      if( archivo.nombreArchivo == nombreArchivo){
        console.log('El nombre ya existe');
        return true;
      }
    }
    return false;
  }

  private _tipoArchivo( tipoArchivo:string ):boolean {
    return (tipoArchivo === '' || tipoArchivo === undefined )? false : tipoArchivo.startsWith('image');
  }

}
