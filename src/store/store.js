// src/redux/store.js
import { createStore } from 'redux';
import reducer from '../reducers/reducers';

const store = createStore(reducer);

export default store;