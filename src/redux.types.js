// @flow
export type State = {
  entities: {
    persons: any
  }
}

export type PersonAction =
  | { type: 'LOAD_USER', id: string }
  | { type: 'SAVE_USER', data: any };

export type Action = PersonAction

export type Dispatch = (action: Action) => any;