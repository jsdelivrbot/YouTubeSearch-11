import React from 'react';

const VideoPlayer = ({video}) =>{

    if(!video){
        return <div>Loading...</div>
    }

    const videoID = video.id.videoId;
    const videoURL = `https://www.youtube.com/embed/${videoID}`;

    return(
        <div className="video-player col-xs-12 col-sm-12 col-md-7 col-lg-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={videoURL}></iframe>
            </div>
            <div className="video-details">
                <div className="video-title">
                    {video.snippet.title}
                </div>
                <div className="video-description">
                    {video.snippet.description}
                </div>
            </div>
        </div>
    );

}

export default VideoPlayer;
