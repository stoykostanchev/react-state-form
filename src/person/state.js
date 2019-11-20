// @flow
import type { Action, State } from '../redux.types'
import type { Person } from './model'
import { marshaller } from './model'
import {
  LOAD_USER,
  SAVE_USER
} from '../constants/ActionTypes'

type Lens<T> = string => State => T;

const getter: Lens<State> = id => state => 
  state.getIn(['entities', 'persons', id])

export const lens: Lens<Person> = id => state => 
  marshaller.unmarshal(getter(id)(state))

export const getPerson: string => Action = id => ({
  type: LOAD_USER,
  data: id,
})
export const savePerson: Person => Action = person => {
  return {
    type: SAVE_USER,
    data: person,
  }
}
