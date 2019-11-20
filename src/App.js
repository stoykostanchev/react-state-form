import React from 'react';
import logo from './logo.svg';
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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <PersonForm></PersonForm>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Provider>
  );
}

export default App;
