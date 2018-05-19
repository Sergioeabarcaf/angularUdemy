import { Component, OnInit } from '@angular/core';
import { FileItem } from '../../models/file-item';
import { CargaImgService } from '../../services/carga-img.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent implements OnInit {

  estaSobreDrop:boolean = false;
  archivos: FileItem[] = [];

  constructor(public _cargaImgService:CargaImgService) { }

  ngOnInit() {
  }

  cargarImg(){
    this._cargaImgService.cargarImgFirebase( this.archivos );
  }

}
