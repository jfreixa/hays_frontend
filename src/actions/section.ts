import { Action } from '@ngrx/store';
import { ApiSection } from './../models/section';

export const GET_SECTIONS = 'GET_SECTIONS'
export const GET_SECTIONS_SUCCESS = 'GET_SECTIONS_SUCCESS'

export class GetAction implements Action {
  readonly type = GET_SECTIONS;
}
export class GetSuccessAction implements Action {
  readonly type = GET_SECTIONS_SUCCESS;

  constructor(public payload: ApiSection[]) { }
}

export type Actions
  = GetAction
  | GetSuccessAction;