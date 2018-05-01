import { Component, OnInit } from '@angular/core';
import {MeService} from '../../../services/me.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private me: MeService) { }

  ngOnInit() {
  }

}
