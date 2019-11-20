export type State = {
  entities: {
    persons: any
  }
}

export type Action =
  | { type: "FOO", foo: number }
  | { type: "BAR", bar: boolean }
  | { type: "BAZ", baz: string };

export type ThunkAction =
  | { type: "TOO", foo: number }
  | { type: "TAR", bar: boolean }

export type PromiseAction =
  | { type: "POO", foo: number }
  | { type: "PAR", foo: number }

export type Dispatch = (action: Action | ThunkAction | PromiseAction) => any;