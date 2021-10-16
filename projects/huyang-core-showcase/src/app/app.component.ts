import {Component, OnInit} from '@angular/core';
import {HuyangAuthService} from '../../../huyang/core/src/lib/services/huyang-auth.service';
import {HuyangHeaderInitModel} from '../../../huyang/core/src/lib/models/huyang-header/huyang-header-init.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

//  constructor(private store: Store<HuyangStateModel>, private pI: Injector) {
  constructor(private authService: HuyangAuthService) {
  }

  ngOnInit(): void {
    this.authService.localAuthSetup();
  }
}
