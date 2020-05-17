import {
  SET_PHONE_DETAILS,
  SET_PHONES,
  TOGGLE_IS_FETCHING,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_PRICE,
  SET_QUANTITY,
  ADD_TO_FAVORITES,
  DELETE_FROM_FAVORITES,
} from './constants';

export const setPhoneDetailsAC = (details) => ({
  type: SET_PHONE_DETAILS, details,
});

export const setPhonesAC = (phones) => ({
  type: SET_PHONES, phones,
});

export const toggleIsFetchingAC = (isFetching) => ({
  type: TOGGLE_IS_FETCHING, isFetching,
});

export const setCartId = (payload) => ({
  type: ADD_TO_CART,
  payload,
});

export const deleteCartId = (payload) => ({
  type: REMOVE_FROM_CART,
  payload,
});

export const setPriceToAmount = (payload) => ({
  type: SET_PRICE,
  payload,
});

export const setQuantityToTotal = (payload) => ({
  type: SET_QUANTITY,
  payload,
});

export const addToFavoritesAC = (id) => ({
  type: ADD_TO_FAVORITES,
  id,
});

export const deleteFromFavoritesAC = (id) => ({
  type: DELETE_FROM_FAVORITES,
  id,
});
