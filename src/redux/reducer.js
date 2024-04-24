import {createStore} from 'redux';
import { reducer} from './store';

export const store=createStore(reducer);