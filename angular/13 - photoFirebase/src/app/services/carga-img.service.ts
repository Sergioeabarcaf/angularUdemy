import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { FileItem } from '../models/file-item';

@Injectable()
export class CargaImgService {

  private CARPETA_IMG = 'img';

  constructor(private db: AngularFirestore) { }

  cargarImgFirebase( imagenes:FileItem[] ){
    console.log(imagenes);
  }

  private guardarImg( imagen:any ){
    this.db.collection(`/${ this.CARPETA_IMG }`).add( imagen );
  }



}
