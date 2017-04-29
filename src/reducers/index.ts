import { combineReducers } from '@ngrx/store';
import { sectionReducer } from './section'
import { taskReducer } from './task'

const reducers = {
  sectionReducer,
  taskReducer
}
export const rootReducer = combineReducers(reducers)