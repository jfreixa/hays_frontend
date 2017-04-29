import { Task } from './../models/task';
import { Action } from '@ngrx/store';
import * as SectionAction from '../actions/section';

export function taskReducer(state: Task[] = [], action: Action) {
  switch (action.type) {
    case SectionAction.GET_SECTIONS_SUCCESS:
      return action.payload.tasks;
    default:
      return state;
  }
}