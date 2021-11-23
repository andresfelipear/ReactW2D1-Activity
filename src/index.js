import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Provider} from 'react-redux'
import { createStore} from 'redux'

import personReducer from './redux/person.reducer';

const myStore = createStore(personReducer)

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
    <Provider store={myStore}>
      <App />
    </Provider>,
    document.getElementById('root')
  );