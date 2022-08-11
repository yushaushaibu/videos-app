import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from "../apis/youtube";




class App extends React.Component {
    state = { videos: [], selectedVideo: null }

    onTermSearch = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })

        // console.log(response.data.items)
        this.setState({ videos: response.data.items });
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar anyNameOnFormSubmit={this.onTermSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
            </div>
        )
    }
}

export default App;
