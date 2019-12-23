import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = {
  canvas: [
    [{}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, { color: 'X' }, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}],
  ],
  commands: [
    { description: 'a', date: 1 },
    { description: 'b', date: 2 },
    { description: 'c', date: 3 },
  ],
};

function information(state = initialState, action) {
  switch (action.type) {
    case 'ADD_COMMAND':
      return {
        ...state,
        commands: [
          ...state.commands,
          {
            description: action.payload.description,
            date: action.payload.date,
          },
        ],
      };
    case 'UPDATE_CANVAS':
      return {
        ...state,
        canvas: [...action.payload],
      };
    case 'ADD_SURNAME':
      return {
        ...state,
        information: {
          ...state.information,
          input: { ...state.information.input, surname: action.payload },
        },
      };
    case 'ADD_GENDER':
      return {
        ...state,
        information: {
          ...state.information,
          select: { ...state.information.select, gender: action.payload },
        },
      };
    case 'ADD_COMPANY':
      return {
        ...state,
        information: {
          ...state.information,
          input: { ...state.information.input, company: action.payload },
        },
      };
    case 'ADD_TIMEZONE':
      return {
        ...state,
        information: {
          ...state.information,
          select: { ...state.information.select, timezone: action.payload },
        },
      };
    default:
      return state;
  }
}

const store = createStore(information);
store.subscribe(() => {});

ReactDOM.render(
  <Provider store={store}>
    <App store={store.getState()} />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
