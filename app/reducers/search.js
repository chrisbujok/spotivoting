import * as actions from '../actions/search';

const defaultState = {
  query: '',
  isSearching: false,
  items: [],
};

function search(state = defaultState, action) {
  switch (action.type) {
    case actions.START_SEARCH:
      return {
        ...state,
        isSearching: true,
      };
    case actions.FINISH_SEARCH:
      return {
        ...state,
        isSearching: false,
      };
    case actions.ADD_AUTOCOMPLETE:
      return {
        ...state,
        items: action.items,
      };
    case actions.CANCEL:
      return {
        ...state,
        items: [],
        query: '',
      };
    case actions.CLEAR_AUTOCOMPLETE:
      return {
        ...state,
        items: [],
      };
    case actions.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.id),
      };
    default:
      return state;
  }
}

export { search };
