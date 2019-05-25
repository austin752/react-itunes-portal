import React from 'react';
// import ItemPreview from '../item-card/item-preview/item-preview';

const ItemCard = props => {
  return(
<div className="card" style={props.style} key={props.trackId}>
  <img src={props.artworkUrl100} alt="props.artistName" />

  <div className="card-body">
    <h5 className="card-title"><a href={props.trackViewUrl}>{props.trackName}</a></h5>
    <p className="card-text collection" style={{overflow: 'hidden', textOverflow: 'ellipsis'}}>
      <b>Collection Name:</b> <br></br>{props.collectionName}</p>

    <p className="card-text"><b>Release Date:</b><br></br> {props.releaseDate}}</p>
    <p className="card-text">
        {/* <Link to={props.previewUrl} className="link">
          View Photo
        </Link> */}
        {/* <ItemPreview
          previewUrl={props.previewUrl} /> */}

      <button type="button" class="btn btn-link" data-toggle="modal" data-target="#exampleModalCenter">
        <i className="fa fa-headphones" aria-hidden="true"></i>
      </button>
      {/* <a href={props.previewUrl}>
        <i className="fa fa-headphones" aria-hidden="true"></i>
      </a> */}
    </p>

    <p className="card-text"><b>Album Price:</b> ${props.collectionPrice}</p>

    <a href={props.artistViewUrl} className="btn btn-primary">Visit {props.artistName} website</a>
  </div>

</div>
  )
}

export default ItemCard