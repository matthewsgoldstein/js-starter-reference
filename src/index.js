import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import youtubeSearch from './youtube-api';

class App extends Component {
  constructor(props) {
    super(props);
    youtubeSearch('pixar').then(videos => {
      console.log(videos);
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }

}

ReactDOM.render(<App />, document.getElementById('main'));
