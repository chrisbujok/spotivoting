import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import SearchIndicator from './SearchIndicator';
import Autocomplete from '../containers/Autocomplete';

class Input extends Component {
  constructor(props) {
    super(props);

    this.query = props.query;

    this.onChange = this.onChange.bind(this);
    this.debounce = _.debounce(props.onChange, 500);
    this.mouseClicked = false;

    this.keydown = event => {
      if (event.keyCode === 27) {
        this.onCancel();
      }
    };

    this.mousedown = () => {
      if (!this.mouseClicked) {
        this.onCancel();
      }
    };
  }

  componentDidMount() {
    window.addEventListener(
      'keydown',
      this.keydown,
      false
    );

    window.addEventListener(
      'mousedown',
      this.mousedown,
      false
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      'keydown',
      this.keydown,
      false
    );

    window.removeEventListener(
      'mousedown',
      this.mousedown,
      false
    );
  }

  onMouseDown() {
    this.mouseClicked = true;
  }

  onMouseUp() {
    this.mouseClicked = false;
  }

  onChange(event) {
    this.query = event.target.value;
    this.setState({ query: event.target.value });

    this.debounce(event.target.value);
  }

  onCancel() {
    this.query = '';
    this.setState({ query: '' });
    this.props.onCancel();
  }

  render() {
    return (
      <div>
        <div
          className={'search-box'}
          onMouseDown={() => this.onMouseDown()}
          onMouseUp={() => this.onMouseUp()}
        >
          <div className={'input-group'}>
            <SearchIndicator isSearching={this.props.isSearching} />
            <input
              type="text"
              onChange={this.onChange}
              value={this.query}
              placeholder={'Search only cool music here...'}
              className={'form-control input-lg'}
            />
            {this.query ? <span className={'input-group-addon'}>
              <i className={'fa fa-close fa-2x fa-fw'} onClick={() => this.onCancel()} />
            </span> : null}
          </div>
        </div>
        <Autocomplete onMouseDown={() => this.onMouseDown()} onMouseUp={() => this.onMouseUp()} />
      </div>
    );
  }
}

Input.propTypes = {
  query: PropTypes.string.isRequired,
  isSearching: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default Input;
