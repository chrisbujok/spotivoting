import React, { PropTypes } from 'react';

const AutocompleteItem = ({ item, onAddButtonClick }) => (
  <div className={'row'}>
    <div className={'col-xs-12'}>
      <div className={'autocomplete-item'} onClick={() => onAddButtonClick(item)}>
        <img
          src={item.album.images[item.album.images.length - 1].url}
          alt={item.name}
        />
        <span>{item.artists.map(a => a.name).join(', ')} - {item.name}</span>
      </div>
    </div>
  </div>
);

AutocompleteItem.propTypes = {
  item: PropTypes.object.isRequired,
  onAddButtonClick: PropTypes.func.isRequired,
};

export default AutocompleteItem;
