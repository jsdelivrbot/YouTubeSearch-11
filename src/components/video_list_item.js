import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    const thumbnailURL = video.snippet.thumbnails.default.url;
    const heading = video.snippet.title;
    return (
        <li onClick={() => onVideoSelect(video)} className="video-item">
            <div className="media">
                <div className="media-image">
                    <img className="media-thumbnail" src={thumbnailURL}/>
                </div>
                <div className="media-details">
                    <div className="media-heading">
                        {heading}
                    </div>
                </div>
            </div>
        </li>
    );
}

export default VideoListItem;
