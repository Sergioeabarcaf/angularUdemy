import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { FileItem } from '../models/file-item';

@Injectable()
export class CargaImgService {

  private CARPETA_IMG = 'img';

  constructor(private db: AngularFirestore) { }

  //Subir a storage

  cargarImgFirebase( imagenes:FileItem[] ){
    const storageRef = firebase.storage().ref();
    for( const item of imagenes ){
      item.estaSubiendo = true;
      if( item.progreso >= 100 ){
        continue;
      }
      const uploadTask: firebase.storage.UploadTask = storageRef.child(`${ this.CARPETA_IMG }/${ item.nombreArchivo }`).put( item.archivo );
      uploadTask.on( firebase.storage.TaskEvent.STATE_CHANGED,
        ( snapshot:firebase.storage.UploadTaskSnapshot ) => item.progreso = ( snapshot.bytesTransferred / snapshot.totalBytes ) * 100,
        ( error ) => console.error(error),
        () => {
          console.log('Imagen cargada');
          item.url = uploadTask.snapshot.downloadURL;
          item.estaSubiendo = false;
          this.guardarImg({ nombre: item.nombreArchivo, url: item.url });
        }
      )
    }
  }

  //Gurdar referencia en DB

  private guardarImg( imagen:any ){
    this.db.collection(`/${ this.CARPETA_IMG }`).add( imagen );
  }



}
