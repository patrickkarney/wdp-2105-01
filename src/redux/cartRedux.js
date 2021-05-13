/* selectors */
export const getAll = ({ cart }) => cart.products;
export const getCount = ({ cart }) => cart.products.length;
export const getFavorites = ({ cart }) => cart.favorites;

/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_PRODUCT = createActionName('ADD_PRODUCT');
const ADD_TO_FAVORITES = createActionName('ADD_TO_FAVORITES');
const REMOVE_FROM_FAVORITES = createActionName('REMOVE_FROM_FAVORITES');

/* action creators */
export const addProduct = payload => ({ payload, type: ADD_PRODUCT });
export const addToFavorites = payload => ({ payload, type: ADD_TO_FAVORITES });
export const removeFromFavorites = payload => ({
  payload,
  type: REMOVE_FROM_FAVORITES,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_PRODUCT: {
      return {
        ...statePart,
        products: [...statePart.products, action.payload],
      };
    }
    case ADD_TO_FAVORITES: {
      return {
        ...statePart,
        favorites: [...statePart.favorites, action.payload],
      };
    }
    case REMOVE_FROM_FAVORITES: {
      return {
        ...statePart,
        favorites: statePart.favorites.filter(e => e !== action.payload),
      };
    }
    default:
      return statePart;
  }
}
