import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  phonesPropType,
  favoritePhonesPropType,
} from '../../propTypesConstants';
import { Favorites } from './Favorites';

const FavoritesContainer = (props) => {
  const {
    favoritePhones,
    itemPrice,
    phones,
  } = props;

  return (
    <Favorites
      favoritePhones={favoritePhones}
      itemPrice={itemPrice}
      phones={phones}
    />

  );
};

const mapStateToProps = (state) => ({
  favoritePhones: state.phonesPage.favoritePhones,
  itemPrice: state.phonesPage.itemPrice,
  phones: state.phonesPage.phones,
});

export default connect(mapStateToProps, null)(FavoritesContainer);

FavoritesContainer.propTypes = {
  favoritePhones: favoritePhonesPropType.isRequired,
  phones: phonesPropType.isRequired,
  itemPrice: PropTypes.number.isRequired,
};
