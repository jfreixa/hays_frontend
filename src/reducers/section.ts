import { Section } from './../models/section';
import { Action } from '@ngrx/store';
import * as SectionAction from '../actions/section';

export function sectionReducer(state: Section[] = [], action: Action) {
  switch (action.type) {
    case SectionAction.GET_SECTIONS_SUCCESS:
      return action.payload.sections;
    default:
      return state;
  }
}