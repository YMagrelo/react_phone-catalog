/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
// eslint-disable-next-line max-len
import favoriteIconActive from '../../assets/images/icons/favorite-icon--active.svg';
import favoriteIcon from '../../assets/images/icons/favorite-icon.svg';
import {
  addToFavoritesAC,
  deleteFromFavoritesAC,
} from '../../redux/reducers/actionCreators';

const FavoriteButton = (props) => {
  const {
    id,
    favoritePhones,
    addToFavorites,
    deleteFromFavorites,
  } = props;

  const setFavorite = (phoneId) => {
    addToFavorites(phoneId);
  };

  const removeFavorite = (phoneId) => {
    deleteFromFavorites(phoneId);
  };

  return (
    <>
      {favoritePhones.includes(id)
        ? (
          <button
            className="card__favorite"
            type="button"
            onClick={() => removeFavorite(id)}
          >
            <img
              src={favoriteIconActive}
              alt="favorite icon"
              className="card__favorite-icon"
            />
            {' '}
          </button>
        ) : (
          <button
            className="card__favorite"
            type="button"
            onClick={() => setFavorite(id)}
          >
            <img
              src={favoriteIcon}
              alt="favorite icon"
              className="card__favorite-icon"
            />
            {' '}
          </button>
        )}
    </>
  );
};

const mapStateToProps = (state) => ({
  favoritePhones: state.phonesPage.favoritePhones,
});

const mapDispatchToProps = (dispatch) => ({
  addToFavorites: (id) => dispatch(addToFavoritesAC(id)),
  deleteFromFavorites: (id) => dispatch(deleteFromFavoritesAC(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteButton);
