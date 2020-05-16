import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  phonesPropType,
  favoritePhonesPropType,
} from '../../propTypesConstants';
import { Favorites } from './Favorites';
import {
  addToCartAC,
} from '../../redux/reducers/actionCreators';

const FavoritesContainer = (props) => {
  const {
    favoritePhones,
    addToCart,
    itemPrice,
    phones,
  } = props;

  return (
    <Favorites
      favoritePhones={favoritePhones}
      addToCart={addToCart}
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

const mapDispatchToProps = (dispatch) => ({
  addToCart: (id) => dispatch(addToCartAC(id)),

});

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer);

FavoritesContainer.propTypes = {
  favoritePhones: favoritePhonesPropType.isRequired,
  phones: phonesPropType.isRequired,
  addToCart: PropTypes.func.isRequired,
  itemPrice: PropTypes.number.isRequired,
};
