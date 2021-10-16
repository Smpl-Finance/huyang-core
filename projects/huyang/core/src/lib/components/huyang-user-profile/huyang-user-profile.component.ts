import { Component, OnInit } from '@angular/core';
import {HuyangAuthService} from '../../services/huyang-auth.service';

@Component({
  selector: 'lib-huyang-user-profile',
  templateUrl: './huyang-user-profile.component.html',
  styleUrls: ['./huyang-user-profile.component.css']
})
export class HuyangUserProfileComponent implements OnInit {

  constructor(public authService: HuyangAuthService) { }

  ngOnInit() {
  }

}
