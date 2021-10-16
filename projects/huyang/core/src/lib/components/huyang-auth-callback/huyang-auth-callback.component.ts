import { Component, OnInit } from '@angular/core';
import {HuyangAuthService} from '../../services/huyang-auth.service';

@Component({
  selector: 'lib-huyang-auth-callback',
  templateUrl: './huyang-auth-callback.component.html',
  styleUrls: ['./huyang-auth-callback.component.css']
})
export class HuyangAuthCallbackComponent implements OnInit {

  constructor(private authService: HuyangAuthService) { }

  ngOnInit() {
    this.authService.handleAuthCallback();
  }

}
