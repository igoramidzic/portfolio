import {Component, Input, OnInit} from '@angular/core';
import {MeService} from '../../../../services/me.service';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {

  @Input('link') link: any;

  constructor(private me: MeService) { }

  ngOnInit() {
  }

}
