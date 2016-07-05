import React, { PropTypes } from 'react';
import { List as ImmutableList } from 'immutable';
import Track from './Track';

const List = ({ tracks, currentTrack, onRemoveClick, onUpvoteClick, onDownvoteClick }) => (
  <div className={'container-fluid'}>
    <div className={'row'}>
      <div className={'col-xs-12'}>
        <div id="list" className={'tracks-list'}>
          {tracks.map(track =>
            <Track
              key={track.id}
              track={track}
              currentTrack={currentTrack}
              onRemoveClick={onRemoveClick}
              onUpvoteClick={onUpvoteClick}
              onDownvoteClick={onDownvoteClick}
            />
          )}
        </div>
      </div>
    </div>
  </div>
);

List.propTypes = {
  tracks: PropTypes.instanceOf(ImmutableList).isRequired,
  currentTrack: PropTypes.object,
  onRemoveClick: PropTypes.func.isRequired,
  onUpvoteClick: PropTypes.func.isRequired,
  onDownvoteClick: PropTypes.func.isRequired,
};

export default List;
