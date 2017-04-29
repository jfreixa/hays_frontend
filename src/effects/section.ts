import { SectionService } from './../services/section';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { normalize, schema } from 'normalizr'

import * as SectionActions from '../actions/section';

@Injectable()
export class SectionEffects {

  @Effect()
  todos$: Observable<Action> = this.actions$
    .ofType(SectionActions.GET_SECTIONS)
    .map(toPayload)
    .switchMap(query => {

      return this.sectionService.getAllSections()
        .map(sections => {
          let data = this.normalizr(sections);
          console.log(data)
          return data.entities;
        })
        .map(sections => new SectionActions.GetSuccessAction(sections))
        .catch(() => of(new SectionActions.GetSuccessAction([])));
    });

  constructor(private actions$: Actions, private sectionService: SectionService) { }

  normalizr(data) {
    const task = new schema.Entity('tasks')
    const section = new schema.Entity('sections', {
      tasks: [task]
    })
    return normalize(data, [section])
  }
}