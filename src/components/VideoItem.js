import React from 'react'
import './VideoItem.css'

const VideoItem=({video, onVideoSelect})=>{
    //go under network tab on browser to see the details.
    //now we mention diff types of obj in video,i.e title,channeltitle,etc-->under snippet
    return( 

    //editing using semantic ui classes
    <div onClick={()=>onVideoSelect(video)} className="video-item item">
        <img alt={video.snippet.title}
         className="ui image"
        src={video.snippet.thumbnails.medium.url}/>
        <div className="content">
           <div className="header">{video.snippet.title}</div> 
        </div>

    </div>
    )
}

export default VideoItem