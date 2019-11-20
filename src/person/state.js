// @flow
import type { Action, Dispatch, State } from '../redux.types'
import type { Person } from './model'
import { marshaller } from './model'

type Lens<T> = string => State => T;

const getter: Lens<State> = id => state => 
  state.getIn(['entities', 'persons', id])

export const lens: Lens<Person> = id => state => 
  marshaller.unmarshal(getter(id)(state))

export const getPerson: string => Action = id => ({
  type: "LOAD_USER",
  id,
})

export const savePerson: Person => (d: Dispatch) => void = person => dispatch => {
  Promise.resolve().then(() => {
    dispatch({
      type: "SAVE_USER",
      data: marshaller.marshal({ ...person, name: person.name + ' SAVED' }),
    })
  })
}