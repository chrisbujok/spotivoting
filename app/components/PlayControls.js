import React, { Component, PropTypes } from 'react';

class PlayControls extends Component {
  render() {
    return (
      <div className={'play-controls'}>
        <div className={'container-fluid'}>
          <div className={'row'}>
            <div className={'col-md-2 col-md-offset-5'}>
              <div className={'buttons-container'}>
                <button
                  className={`btn btn-lg play ${this.props.track ? 'playing' : ''}`}
                  onClick={() => { this.props.play(); }}
                >
                  <span className={"fa fa-play"} aria-hidden="true"></span>
                </button>
                <button className={'btn btn-lg'} onClick={() => { this.props.stop(); }}>
                  <span className={"fa fa-stop"} aria-hidden="true"></span>
                </button>
                <button className={'btn btn-lg'} onClick={() => { this.props.next(); }}>
                  <span className={"fa fa-step-forward"} aria-hidden="true"></span>
                </button>
              </div>
              {this.props.track ?
                <audio
                  ref="player"
                  src={this.props.track.preview_url}
                  onEnded={() => this.props.play()}
                  autoPlay
                /> :
                null
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PlayControls.propTypes = {
  track: PropTypes.object,
  play: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired,
  queue: PropTypes.object,
};

export default PlayControls;
