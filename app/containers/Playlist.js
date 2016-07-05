import { connect } from 'react-redux';
import List from '../components/List';
import * as actions from '../actions/queue';

const mapStateToPros = (state) => ({
  tracks: state.queue.get('tracks'),
  currentTrack: state.queue.get('currentTrack'),
});

const mapDispatchToProps = dispatch => ({
  onRemoveClick: track => {
    dispatch(actions.remove(track));
  },
  onUpvoteClick: track => {
    dispatch(actions.upvote(track));
  },
  onDownvoteClick: track => {
    dispatch(actions.downvote(track));
  },
});

const Playlist = connect(
  mapStateToPros,
  mapDispatchToProps
)(List);

export default Playlist;
