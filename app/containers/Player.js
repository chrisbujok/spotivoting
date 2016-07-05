import { connect } from 'react-redux';
import PlayControls from '../components/PlayControls';
// import { getCurrentTrack } from '../selectors/current-track';
import { play, next, stop } from '../actions/queue';

const mapStateToProps = state => ({
  track: state.queue.get('currentTrack'),
  tracks: state.queue.get('tracks'),
});

const mapDispatchToProps = dispatch => ({
  play: () => {
    dispatch(play());
  },
  next: () => {
    dispatch(next());
  },
  stop: () => {
    dispatch(stop());
  },
});

const Player = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayControls);

export default Player;
