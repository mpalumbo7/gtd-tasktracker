import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { reducer as form } from 'redux-form';

// modules
import tasks from './modules/tasks';

const middleware = applyMiddleware(promise(), thunk, logger());

const reducer = combineReducers({
  form,
  tasks,
});

export default createStore(reducer, middleware);
