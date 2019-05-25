import React from 'react';
import ItemPreview from './item-card/item-preview/item-preview';

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      modalId: ''
    }
  }

  toggleModal = (e) => {
    this.setState({
      isOpen: !this.state.isOpen,
      modalId: e.target.Id
    });
  }

  getId(str) {
     return '#modal-' + str
  }
  getMId(str) {
     return 'modal-' + str
  }

  getParsedDate(date){
    date = String(date).split('T');
    var days = String(date[0]).split('-');
    const d = {
      year: parseInt(days[0]),
      month: parseInt(days[2]),
      day: parseInt(days[1])-1
    }
    const dt = d.day + '/' + d.month + '/' + d.year;
    // return [{year: parseInt(days[0]), month: parseInt(days[1])-1, day: parseInt(days[2])}];
    return dt;
  }

  getDate(str) {
    const relDt = Date(this.getParsedDate(str));
		console.log('TCL: List -> getDate -> relDt', relDt);
  }

  handleClick(url) {
    window.open(url,'Data','height=600,width=980');
  }

  render(){
    return (
      <div className="list" id="music-list">
        <hr></hr>
        <div className="row">
          {this.props.songs.map(song =>
            <div className="card" style={this.props.style} key={song.trackId}>
              <div className="card-img">
                <img className="img-fluid" src={song.artworkUrl100} alt="song.artistName" />
              </div>

              <div className="card-body">
                <h5 className="card-title"><a href={song.trackViewUrl}>{song.trackName}</a></h5>
                <p className="card-text collection" style={{overflow: 'hidden', textOverflow: 'ellipsis'}}>
                  <b>Collection Name:</b> <br></br>{song.collectionName}</p>

                <p className="card-text">
                  <button type="button"
                    className="btn btn-link"
                    data-toggle="modal"
                    title="Preview this track now!"
                    data-target={this.getId(song.trackId)}>More Info...
                  </button>
                </p>

                <ItemPreview
                  id={this.getMId(song.trackId)}
                  artistName={song.artistName}
                  trackName={song.trackName}
                  previewUrl={song.previewUrl}
                  collectionName={song.collectionName}
                  releaseDate={this.getParsedDate(song.releaseDate)}
                  trackId={song.trackId}
                  collectionPrice={song.collectionPrice}
                  artistViewUrl={song.artistViewUrl}
                  contentAdvisoryRating={song.contentAdvisoryRating}
                  primaryGenreName={song.primaryGenreName}
                  artistId={song.artistId} />

                <button type="btn" className="btn btn-primary" onClick={() => this.handleClick(song.collectionViewUrl)}><b>Collection Price:</b> ${song.collectionPrice}</button>
              </div>

            </div>
          )}
        </div>

      </div>
    );
  }


}

export default List;