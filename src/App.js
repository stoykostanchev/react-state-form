import React from 'react';
import PersonForm from './person/Form';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import thunk from 'redux-thunk';
import './App.css';

function App() {
  const store = createStore(reducer, applyMiddleware(thunk))
  return (
    <Provider store={store}>
      <div className="App">
        <PersonForm></PersonForm>
      </div>
    </Provider>
  );
}

export default App;
