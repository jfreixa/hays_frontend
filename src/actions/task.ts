import { Action } from '@ngrx/store';
import { Task, ApiTask } from './../models/task';

export const CREATE_TASK = 'CREATE_TASK'
export const CREATE_TASK_SUCCESS = 'CREATE_TASK_SUCCESS'

export const DELETE_TASK = 'DELETE_TASK'
export const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS'

export const UPDATE_TASK = 'UPDATE_TASK'
export const UPDATE_TASK_SUCCESS = 'UPDATE_TASK_SUCCESS'

export const COMPLETE_TASK = 'COMPLETE_TASK'
export const COMPLETE_TASK_SUCCESS = 'COMPLETE_TASK_SUCCESS'

export class CreateAction implements Action {
  readonly type = CREATE_TASK;

  constructor(public payload: Task) { }
}
export class CreateSuccessAction implements Action {
  readonly type = CREATE_TASK_SUCCESS;

  constructor(public payload: ApiTask) { }
}

export class DeleteAction implements Action {
  readonly type = DELETE_TASK;

  constructor(public payload: Task) { }
}
export class DeleteSuccessAction implements Action {
  readonly type = DELETE_TASK_SUCCESS;

  constructor(public payload: ApiTask) { }
}

export class UpdateAction implements Action {
  readonly type = UPDATE_TASK;

  constructor(public payload: Task) { }
}
export class UpdateSuccessAction implements Action {
  readonly type = UPDATE_TASK_SUCCESS;

  constructor(public payload: ApiTask) { }
}

export class CompleteAction implements Action {
  readonly type = COMPLETE_TASK_SUCCESS;

  constructor(public payload: ApiTask) { }
}
export class CompleteSuccessAction implements Action {
  readonly type = UPDATE_TASK;

  constructor(public payload: Task) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = CreateAction
  | DeleteAction
  | UpdateAction
  | CompleteAction
  | CreateSuccessAction
  | DeleteSuccessAction
  | UpdateSuccessAction
  | CompleteSuccessAction;