import React, { PropTypes } from 'react';

const Track = ({ track, currentTrack, onRemoveClick, onUpvoteClick, onDownvoteClick }) => (
  <div className={'row'}>
    <div className={'col-xs-10'}>
      <div className={'track'}>
        <img
          src={track.album.images[track.album.images.length - 1].url}
          alt={track.name}
        />
        {
          currentTrack && track.id === currentTrack.id
          ? <span className={'playing'}><i className={'fa fa-play'}></i></span>
          : null
        }
        <span>
          {track.artists.map(a => a.name).join(', ')} - <strong>{track.name}</strong>
        </span>
        <span className={`badge ${track.score >= 0 ? 'up' : 'down'}`}>{track.score}</span>
      </div>
    </div>
    <div className={'col-xs-2'}>
      <div className={'buttons'}>
        <button onClick={() => onRemoveClick(track.id)}>
          <i className={'fa fa-trash'}></i>
        </button>
        <button onClick={() => onUpvoteClick(track.id)}>
          <i className={'fa fa-thumbs-up'}></i>
        </button>
        <button onClick={() => onDownvoteClick(track.id)}>
          <i className={'fa fa-thumbs-down'}></i>
        </button>
      </div>
    </div>
  </div>
);

Track.propTypes = {
  track: PropTypes.object.isRequired,
  currentTrack: PropTypes.object,
  onRemoveClick: PropTypes.func.isRequired,
  onUpvoteClick: PropTypes.func.isRequired,
  onDownvoteClick: PropTypes.func.isRequired,
};

export default Track;
