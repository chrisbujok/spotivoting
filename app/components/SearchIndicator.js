import React, { PropTypes } from 'react';

const SearchIndicator = ({ isSearching }) => (
  <span className={'input-group-addon'}>
    {isSearching ? <i className={'fa fa-circle-o-notch fa-spin fa-2x fa-fw'}></i>
      : <i className={'fa fa-spotify fa-2x fa-fw'} />}
  </span>
);

SearchIndicator.propTypes = {
  isSearching: PropTypes.bool.isRequired,
};

export default SearchIndicator;
