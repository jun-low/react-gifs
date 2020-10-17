import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar';
import GifList from './gif_list';
import Gif from './gif';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGifId: "yR4xZagT71AAM"
    };
  }

  search = (query) => {
  // API call
    const API_KEY = `${process.env.GIPHY_API_KEY}`;
    // Search with options using callback
    giphy(API_KEY).search({
      q: query,
      rating: 'g  ',
      limit: 15
    }, (error, result) => {
      // Res contains gif data!
      this.setState({
        gifs: result.data
      });
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
