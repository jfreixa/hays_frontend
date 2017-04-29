import { Observable } from 'rxjs/Observable';
import { SectionService } from './../../services/section';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { normalize, schema } from 'normalizr'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  public sections$: Observable<any>;

  constructor(public navCtrl: NavController, private sectionService: SectionService) {

  }

  ngOnInit() {
    this.sections$ = this.sectionService.getAllSections();

    const task = new schema.Entity('tasks')
    const section = new schema.Entity('sections', {
      tasks: [task]
    })
    this.sectionService.getAllSections().subscribe((data) => {
      console.log(data)
      console.log(normalize(data, [section]))
    })
  }

}
