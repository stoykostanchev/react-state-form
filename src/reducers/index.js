// @flow
import { combineReducers } from 'redux-immutablejs';
import type { Reducer } from 'redux'
import type { Action, State } from './../redux.types'
import persons from './person'

const reducers: Reducer<State, Action>  = combineReducers({
  entities: persons,
})
export default reducers