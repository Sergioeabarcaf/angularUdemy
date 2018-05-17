import { Component } from '@angular/core';
import { CargaImgService } from '../../services/carga-img.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent {

  constructor(private _cargaImgService:CargaImgService) { }

}
