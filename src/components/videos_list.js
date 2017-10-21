import React from 'react';
import VideoListItem from './video_list_item.js'

const VideoList = (props) =>{

    const videoItems = props.videos.map((video) => <VideoListItem key={video.etag} onVideoSelect={props.onVideoSelect} video ={video} />);

    return (
        <ul className="col-xs-12 col-sm-12 col-md-5 col-lg-4 list-group">
            {videoItems}
        </ul>
    );
}

export default VideoList;
