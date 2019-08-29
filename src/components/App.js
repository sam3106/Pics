import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  constructor() {
    super();
  }
  onSearchSubmit = term => {
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID Your id here'
      }
    });
    console.log(term);
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onTheSearchSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
