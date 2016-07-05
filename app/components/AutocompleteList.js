import React, { PropTypes } from 'react';
import AutocompleteItem from './AutocompleteItem';

const AutocompleteList = ({ items, onAddButtonClick, onMouseDown, onMouseUp }) => (
  <div className={'autocomplete-container'}>
    <div className={'container-fluid'}>
      <div className={'row'}>
        <div className={'col-xs-10 col-xs-offset-1'}>
          <div
            id="autocomplete"
            className={'autocomplete-list'}
            onMouseDown={() => onMouseDown()}
            onMouseUp={() => onMouseUp()}
          >
            {items.map(item =>
              <AutocompleteItem
                key={item.id}
                item={item}
                onAddButtonClick={onAddButtonClick}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);

AutocompleteList.propTypes = {
  items: PropTypes.array.isRequired,
  onAddButtonClick: PropTypes.func.isRequired,
  onMouseDown: PropTypes.func.isRequired,
  onMouseUp: PropTypes.func.isRequired,
};

export default AutocompleteList;
