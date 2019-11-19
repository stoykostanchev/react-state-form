export type State = {
  users: Array<{
    id: string,
    name: string,
    age: number,
    phoneNumber: string,
  }>,
  activeUserID: string,
};

export type Action =
  | { type: "FOO", foo: number }
  | { type: "BAR", bar: boolean }
  | { type: "BAZ", baz: string };

export type Dispatch = (action: Action | ThunkAction | PromiseAction) => any;