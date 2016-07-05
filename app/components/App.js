import React from 'react';
import Playlist from '../containers/Playlist';
import SearchInput from '../containers/SearchInput';
// import Autocomplete from '../containers/Autocomplete';
import Player from '../containers/Player';

const App = () => (
  <div>
    <SearchInput />

    <Playlist />
    <Player />
  </div>
);

export default App;
