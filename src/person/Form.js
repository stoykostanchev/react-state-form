// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import type { FormProps } from 'redux-form'
import { reduxForm, Field } from 'redux-form'

import type { State, Dispatch, Action } from '../redux.types'
// A function that takes a schema and an object and returns an empty object on success
// or an object containing validation messages as per the redux-form documentation.
// validate(shchema)(object)
import { validate } from '../validation'

import type { Person } from './model'
import { schema } from './model'
import { lens, getPerson, savePerson } from './state'

type OwnProps = {
  routeParams: {
    id: string,
  },
};

type StateProps = {
  initialValues: Person,
};

type DispatchProps = {
  onSubmit: Person => Promise<Action>,
  load: string => Promise<Action>,
};

type Props = OwnProps & StateProps & DispatchProps & FormProps;

class PersonForm extends Component<Props> {
  componentDidMount() {
    const { load, routeParams } = this.props
    load(routeParams.id)
  }
  
  render() {
    const { handleSubmit } = this.props
    return <form onSubmit={handleSubmit}>
      <Field name='name' component='input' />
      <Field name='phone' component='input' />
      <Field name='email' component='input' />
      <button>Submit</button>
    </form>
  }
}

const mapStateToProps = (state: State, ownProps: OwnProps): StateProps => ({
  initialValues: lens(ownProps.routeParams.id)(state),
})

const mapDispatchToProps = (dispatch: Dispatch, ownProps: OwnProps): DispatchProps => ({
  load: id => dispatch(getPerson(id)),
  onSubmit: example => dispatch(savePerson(example)),
})

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'PersonForm',
  getFormState: state => state.get('form'), // Tells the form how to access the immutable state.
  validate: validate(schema),
  enableReinitialize: true, // This updates the form when the initial values change.
  destroyOnUnmount: true, // Remove values from the state when unmounting the component.
})(PersonForm))