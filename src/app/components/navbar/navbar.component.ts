import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MeService} from '../../services/me.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() onToggleSidebar = new EventEmitter<boolean>();

  constructor(public me: MeService) { }

  ngOnInit() {
  }

}
