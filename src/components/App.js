import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../APIs/youtube";
import VideoLists from "./VideoLists";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount (){
      this.onTermSubmit('cars');
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({ 
        videos: response.data.items,
        selectedVideo:response.data.items[0] 
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
                {/* use 11 out of 16 columns */}
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
                {/* use 5 out of 16 */}
              <VideoLists
                onVideoSelect={this.onVideoSelect}      
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
