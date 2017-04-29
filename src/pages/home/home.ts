import { Observable } from 'rxjs/Observable';
import { SectionService } from './../../services/section';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

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
  }

}
