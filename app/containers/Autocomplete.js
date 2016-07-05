import { connect } from 'react-redux';
import AutocompleteList from '../components/AutocompleteList';
import { add } from '../actions/queue';
import { removeItem } from '../actions/search';

const mapStateToPros = (state) => ({
  items: state.search.items,
});

const mapDispatchToProps = (dispatch) => ({
  onAddButtonClick: track => {
    dispatch(add(track));
    dispatch(removeItem(track.id));
  },
});

const Autocomplete = connect(
  mapStateToPros,
  mapDispatchToProps
)(AutocompleteList);

export default Autocomplete;
