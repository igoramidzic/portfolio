import { Component, OnInit } from '@angular/core';
import {MeService} from '../../../../services/me.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor(private me: MeService) { }

  ngOnInit() {
  }

}
