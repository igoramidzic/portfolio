import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MeService {

  $me: Observable<any> = new Observable();
  me: any;
  $projects: Observable<any> = new Observable();
  projects: any;

  constructor(private afs: AngularFirestore) {
    this.$me = this.afs.doc('users/igoramidzic')
      .valueChanges();

    this.$me.subscribe(me => {
      this.me = me;
    });

    this.$projects = this.afs.collection('users/igoramidzic/projects', ref => ref.orderBy('completion', 'desc'))
      .valueChanges();

    this.$projects.subscribe(projects => {
      this.projects = projects;
    })

  }

}
