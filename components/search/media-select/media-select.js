import React from 'react';

const MediaSelect = (props) => {

  return (
    <div className="form-group media-select">
      <label>Please select media type</label>
      <select className="form-control" name={props.name} onChange={props.handleMediaChange}>
        <option value="all">All Media Types</option>
        <option value="audiobook">Audio Book</option>
        <option value="ebook">Ebook</option>
        <option value="movie">Movie</option>
        <option value="music">Music</option>
        <option value="musicVideo">Music Video</option>
        <option value="podcast">Podcast</option>
        <option value="software">Software</option>
      </select>
    </div>
  )
}
export default MediaSelect