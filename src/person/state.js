// @flow
import type { State } from '../redux.types'
import type { Person, StateObject } from './model'
import { marshaller } from './model'

type Lens<T> = string => State => T;

const getter: Lens<StateObject> = id => state => 
  state.getIn(['entities', 'persons', id])

export const lens: Lens<Person> = id => state => 
  marshaller.unmarshal(getter(id)(state))

const person: Person = {
  email: 'borat@google.com',
  name: "Borat",
  phone: "Sagdiyev"
}
export const getPerson: Number => StateObject => Person = id => state => person
export const savePerson: Person => void = pers => undefined
