/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { combineReducers } from '@reduxjs/toolkit';
import calendar from 'store/reducers/calendar';
import chat from 'store/reducers/chat';
import menu from 'store/reducers/menu';
import cartReducer from 'store/reducers/cart';
import productReducer from 'store/reducers/product';
import snackbar from 'store/reducers/snackbar';
import { InjectedReducersType } from 'utilsNew/types/injector-typings';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export function createReducer(injectedReducers: InjectedReducersType = {}) {
  if (Object.keys(injectedReducers).length === 0) {
    //@ts-ignore
    return state => state;
  } else {
    return combineReducers({
      ...injectedReducers, ...{
        chat,
        calendar,
        menu,
        snackbar,
        cart: cartReducer,
        product: productReducer,
      }
    });
  }
}