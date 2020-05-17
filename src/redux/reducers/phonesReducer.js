/* eslint-disable no-case-declarations */
import { getPhones } from '../../api/api';
import {
  SET_PHONES,
  TOGGLE_IS_FETCHING,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_PRICE,
  SET_QUANTITY,
  ADD_TO_FAVORITES,
  DELETE_FROM_FAVORITES,
} from './constants';
import { setPhonesAC, toggleIsFetchingAC } from './actionCreators';

const initialState = {
  phones: [],
  isFetching: false,
  addedPhones: {},
  favoritePhones: [],
  itemPrice: 199,
  totalPrice: 0,
  totalCount: 0,
};

export const phonesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PHONES:
      return {
        ...state,
        phones: [...action.phones],
      };

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };

    case ADD_TO_CART:
      return {
        ...state,
        addedPhones: {
          ...state.addedPhones,
          [action.payload.id]: action.payload.quantity,
        },
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        addedPhones: { ...action.payload },
      };

    case SET_PRICE:
      return {
        ...state,
        totalPrice: state.totalPrice + action.payload,
      };

    case SET_QUANTITY:
      return {
        ...state,
        totalCount: state.totalCount + action.payload,
      };

    case ADD_TO_FAVORITES:
      return {
        ...state,
        favoritePhones: [...state.favoritePhones, action.id],
      };

    case DELETE_FROM_FAVORITES:
      return {
        ...state,
        favoritePhones: [...state.favoritePhones]
          .filter(id => id !== action.id),
      };

    default:
      return state;
  }
};

export const getPhonesThunkCreator = () => (dispatch) => {
  dispatch(toggleIsFetchingAC(true));

  getPhones()
    .then(data => {
      dispatch(toggleIsFetchingAC(false));
      dispatch(setPhonesAC(data));
    });
};
