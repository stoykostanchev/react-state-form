// @flow
type StateObject = any
type Marshaller<T, U> = {
  unmarshal: StateObject => T,
  marshal: T => U,
};

export type Person = {
  name: string,
  phone: string,
  email: string,
};

export type PersonResource = {
  name: string,
  contactDetails: {
    phone: string,
    email: string,
  },
};

export const marshaller: Marshaller<Person, PersonResource> = {
  unmarshal: stateObject => {
    if(!stateObject){ return {} }
    return {
      name: stateObject.get('name') || '',
      phone: stateObject.getIn(['contactDetails', 'phone']),
      email: stateObject.getIn(['contactDetails', 'email']),
    }
  },
  marshal: person => {
    debugger
    return {
    name: person.name,
    contactDetails: {
      phone: person.phone,
      email: person.email,
    },
  }
  },
}