import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MeService} from '../../../../services/me.service';
declare var Chart: any;

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  l: any[] = [false, false, false, false];
  skills: any = null;
  @ViewChild('donut') donut: ElementRef;

  constructor(private me: MeService) { }

  ngOnInit() {

    this.me.$me.subscribe(me => {
      this.skills = me.skills;

    //   var data = {
    //     "labels": this.skills.map(x => x.name),
    //     "datasets": [
    //       {
    //         "data": this.skills.map(x => x.experience),
    //         "backgroundColor": this.skills.map(x => {
    //           return 'rgb(' + x.color + ')';
    //         })
    //       }]
    //   };
    //
    //   var chart = new Chart(
    //     donutCtx,
    //     {
    //       "type": 'doughnut',
    //       "data": data,
    //       "options": {
    //         "layout": {
    //           "padding": {
    //             "left": 0,
    //             "right": 0,
    //             "top": 0,
    //             "bottom": 0
    //           }
    //         },
    //         "cutoutPercentage": 50,
    //         "animation": {
    //           "animateScale": true,
    //           "animateRotate": false
    //         }
    //       }
    //     }
    //   );
    });

    // let donutCtx = this.donut.nativeElement.getContext('2d');
  }

}
