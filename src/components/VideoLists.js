import React from 'react'
import VideoItem from './VideoItem'

const VideoLists=({videos, onVideoSelect })=>{

    //for every object/video return the VideoItem
    const renderedList=videos.map((video)=>{
        return <VideoItem 
        key={video.id.videoId} 
        onVideoSelect={onVideoSelect} 
        video={video}/> 
    })

    return <div className="ui relaxed divided list">{renderedList}</div>
}

export default VideoLists