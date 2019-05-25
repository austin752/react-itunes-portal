import React from 'react';
import ReactPlayer from 'react-player';

class ItemPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ''
    };
  }

  handleClick(url) {
    window.open(url,'Data','height=250,width=250');
  }

  render() {
    return (
      <div className="modal fade" id={this.props.id} tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title"><b>{this.props.trackName}</b> - Track Id: {this.props.trackId}</h5>

              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p className="card-text"><b>Artist Id:</b> {this.props.artistId}</p>
              <p className="card-text"><b>Content Advisory Rating:</b> {this.props.contentAdvisoryRating}</p>
              <p className="card-text"><b>Primary Genre:</b> {this.props.primaryGenreName}</p>
              <p className="card-text"><b>Collection Name:</b> {this.props.collectionName}</p>
              <p className="card-text"><b>Release Date:</b> {this.props.releaseDate}</p>
              <p className="card-text"><b>Collection Price:</b> ${this.props.collectionPrice}</p>
              <p className="card-text">
                <button className="btn btn-primary" onClick={() => this.handleClick(this.props.previewUrl)}>Preview this track...</button>
              </p>

              <ReactPlayer
                className='react-player'
                url={this.props.previewUrl}
                width='500'
                height='300'
              />

                {/* <iframe
                title="Modal Embed"
                className="iframe-modal"
                src={this.props.previewUrl}
                allowFullScreen
              /> */}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    )

  }
}

export default ItemPreview