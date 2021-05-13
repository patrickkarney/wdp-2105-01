import ProductBox from './ProductBox';
import { connect } from 'react-redux';
import {
  addToFavorites,
  getFavorites,
  removeFromFavorites,
} from '../../../redux/cartRedux';

const checkFavorite = (state, productId) => {
  return getFavorites(state).includes(productId);
};

const mapStateToProps = (state, props) => ({
  favorite: checkFavorite(state, props.id),
});

const mapDispatcherToProps = dispatcher => ({
  addToFavorites: payload => dispatcher(addToFavorites(payload)),
  removeFromFavorites: payload => dispatcher(removeFromFavorites(payload)),
});

export default connect(mapStateToProps, mapDispatcherToProps)(ProductBox);
