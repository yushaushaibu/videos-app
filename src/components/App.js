import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

class App extends React.Component {
    onTermSearch = (term) => {
        youtube.get('/search', {
            params: {
                q: term
            }
        })
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar anyNameOnFormSubmit={this.onTermSearch}/>
            </div>
        )
    }
}

export default App;
