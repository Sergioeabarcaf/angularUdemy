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
    this._prevenirDetener( event );
  }

  @HostListener('dragleave',['$event'])
  public ondragleave( event:any ){
    this.mouseSobre.emit(false);
  }

  @HostListener('drop',['$event'])
  public ondrop( event:any ){
    const transferencia = this._getTransferencia( event );
    if( !transferencia ){
      return
    }
    this._getArchivos( transferencia.files );
    this._prevenirDetener( event );
    this.mouseSobre.emit(false);
  }

  private _getTransferencia( event: any ){
    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
  }

  private _getArchivos( listaArchivos:FileList ){
    for ( const propiedad in Object.getOwnPropertyNames( listaArchivos )){
      const archivoTemp = listaArchivos[propiedad];
      if (this._archivoPuedeCargarlo( archivoTemp )){
        const nuevoArchivo = new FileItem( archivoTemp );
        this.archivos.push( nuevoArchivo );
      }
    }
  }


  //Validaciones

  private _archivoPuedeCargarlo( archivo: File ): boolean{
    if(!this._archivoDropeado(archivo.name) && this._tipoArchivo( archivo.type )){
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
        console.log('El nombre ya existe ' + nombreArchivo);
        return true;
      }
    }
    return false;
  }

  private _tipoArchivo( tipoArchivo:string ):boolean {
    return (tipoArchivo === '' || tipoArchivo === undefined )? false : tipoArchivo.startsWith('image');
  }

}
