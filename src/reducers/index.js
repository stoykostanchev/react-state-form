// @flow
import { combineReducers } from 'redux-immutablejs';
import type { Reducer } from 'redux'
import type { Action, State } from './../redux.types'
import { reducer as reduxFormReducer } from 'redux-form';
import persons from './person'

const reducers: Reducer<State, Action>  = combineReducers({
  entities: persons,
  form: reduxFormReducer,
})
export default reducers