import React from 'react';


class SearchStats extends React.Component {
  constructor(props){
    super(props);

    this.state = null;
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(url) {
    window.open(url,'Data','height=600,width=980');
  }

  render() {
    if (this.props.numSongs > 0) {
      return(
        <div className={this.props.className}>Your search for <b className="text-capitalize">{this.props.value}</b>&nbsp;returned {this.props.numSongs} results.<br/>
        Visit the
        <button type="btn" onClick={() => this.handleClick(this.props.songs[0].artistViewUrl)} className="btn btn-link page-visit"><b className="text-capitalize">{this.props.value}</b></button> iTunes Page!</div>
      )
      } else {
        return(
          <div></div>
        )
      }
    }
}

export default SearchStats