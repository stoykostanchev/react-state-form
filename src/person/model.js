// @flow
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
  unmarshal: stateObject => ({
    name: stateObject.get('name') || '',
    phone: stateObject.getIn(['contactDetails', 'phone']),
    email: stateObject.getIn(['contactDetails', 'email']),
  }),
  marshal: person => ({
    name: person.name,
    contactDetails: {
      phone: person.phone,
      email: person.email,
    },
  }),
}