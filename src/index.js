import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar.js';
import VideoList from './components/videos_list.js';
import VideoPlayer from './components/video.js';

const API_KEY = 'AIzaSyCYPRdQ455Ts1IgLToWcoyjlDriScUBzrE';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            videos: [],
            selectedVideo: null,
        }
        this.videoSearchTerm('javascript');
    }

    videoSearchTerm(term){
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0],
            });
        });
    }

    render(){
        const videoSearchTerm = _.debounce(term => {this.videoSearchTerm(term)}, 300);

        return (
            <div>
                <SearchBar onSearchTerm = {videoSearchTerm}/>
                <VideoPlayer video={this.state.selectedVideo} />
                <VideoList videos ={this.state.videos} onVideoSelect = {selectedVideo => this.setState({selectedVideo}) } />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.app'));
