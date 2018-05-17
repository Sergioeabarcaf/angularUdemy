import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';

@Injectable()
export class CargaImgService {

  private CARPETA_IMG = 'img';

  constructor(private db: AngularFirestore) { }

  private guardarImg( imagen:any ){
    this.db.collection(`/${ this.CARPETA_IMG }`).add( imagen );
  }

}
