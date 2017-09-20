import React from 'react'
import VideoListItem from './video_list_item'

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    )
  })
  return (
    <ul className='col-md-4 list-group'>
      {videoItems}
    </ul>
  )
}

export default VideoList

// array.map(function(number) {return '<div>' + number + '</div>'})
// >>> ["<div>1</div>", "<div>2</div>", "<div>3</div>"]
