import React from 'react'

const VideoListItem = ({video}) => {
  console.log(video)
  return (
    <li className='list-group-item'>
      <div className='video-list-media'>
        <div className='media-left'>
          <img className='medial-object' />
        </div>
        <div className='media-body'>
          <div className='media-heading' />
        </div>
      </div>

    </li>
  )
}

export default VideoListItem
