import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  styles: []
})
export class ProtegidaComponent implements OnInit {

  profile: any;

  constructor(private _authService:AuthService) { }

  ngOnInit() {
    if (this._authService.userProfile) {
      this.profile = this._authService.userProfile;
      console.log(this.profile);
    } else {
      this._authService.getProfile((err, profileG) => {
        this.profile = profileG;
        console.log(this.profile);
      });
    }

  }

}
