import { Component, OnInit } from '@angular/core';
import { SpotiAppService } from '../../services/spoti-app.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  constructor(public _spotiApp:SpotiAppService ) {

  }

}
