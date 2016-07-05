import { connect } from 'react-redux';
import Input from '../components/Input';
import { searchSpotify, cancel } from '../actions/search';

const mapStateToPros = (state) => ({
  query: state.search.query,
  isSearching: state.search.isSearching,
});

const mapDispatchToProps = dispatch => ({
  onChange: query => {
    dispatch(searchSpotify(query));
  },
  onCancel: () => {
    dispatch(cancel());
  },
});

const SearchInput = connect(
  mapStateToPros,
  mapDispatchToProps
)(Input);

export default SearchInput;
