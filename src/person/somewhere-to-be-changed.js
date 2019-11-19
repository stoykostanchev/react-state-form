// @flow
type Lens<T> = string => State => T;

const getter: Lens<StateObject> = id => state => 
  state.getIn(['entities', 'persons', id])

export const lens: Lens<Person> = id => state => 
  marshaller.unmarshal(getter(id)(state))