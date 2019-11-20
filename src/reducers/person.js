// @flow
import type { Action, State } from './../redux.types'
import { fromJS } from "immutable"
import {
  LOAD_USER
} from '../constants/ActionTypes'

const initialState: State = fromJS({
  persons: []
})


const person = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case LOAD_USER:
      return fromJS({
        "persons": {
          "123" : {
            name: "Demo User",
            contactDetails: {
              "phone": "+42 141 512 52",
              "email": "goran.bregovic@google.com",
            }
          }
        }
      })
    default:
      return state
  }
}

export default person