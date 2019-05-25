import React from 'react';
import './App.css';
import List from './components/list/list';
import SearchInput from './components/search/search-input/search-input';
import SearchButton from './components/search/search-button/search-button';
import MediaSelect from './components/search/media-select/media-select';
import Pagination from './components/list/pagination/pagination';
import ItemsPerPage from './components/list/items-per-page/items-per-page';
import SearchStats from './components/list/search-info/search-info';
import Logo from './components/logo/logo'

const BASE_API_URL = 'https://itunes.apple.com/search?term=';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: [],
      value: '',
      mediaType: '',
      numSongs: 0,
      currentPage: 1,
      itemsPerPage: 8,
      // date: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleArtist = this.handleArtist.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleMediaChange = this.handleMediaChange.bind(this);
    this.handlePageItems = this.handlePageItems.bind(this);
  }

  // sets the value of the search input
  handleArtist(e) {
    this.setState({value: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    // input from user - albumData, artist, etc.
    let albumData = this.state.value;
    let apiUrl = '';
    if (this.state.mediaType !== '') {
      let mediaType = this.state.mediaType;
      apiUrl = BASE_API_URL + albumData + mediaType;
    } else {
      apiUrl = BASE_API_URL + albumData;
    }

  fetch(apiUrl, {
    method: "GET",
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://itunes-portal.s3-website-us-east-1.amazonaws.com'
      }
    })
    .then(resp => {
      resp.json().then(data => {
        this.setState({
          songs: data.results,
          numSongs: data.results.length
        })
      })
    })
  }

  // handles pagination
  handleClick(e) {
    this.setState({
      currentPage: Number(e.target.id)    })
  }

  // handles media select dropdown
  handleMediaChange(e) {
    this.setState({
      mediaType: e.target.mediaType
    })
  }

  // sets number of items per page
  handlePageItems(e) {
    this.setState({
      itemsPerPage: Number(e.target.value)
    })
  }

  render() {
    const allSongsLen = this.state.songs.length;
    const { songs, currentPage, itemsPerPage } = this.state;
    const lastIdx = this.state.currentPage * itemsPerPage; // gives last items index 1 * 10 = lastIdx = 10
    const firstIdx = lastIdx - itemsPerPage; // gives index of first item of the page = 10 - 10 = firstIdx = 0
    const currSongList = songs.slice(firstIdx, lastIdx)

    const pageNumbers = [];
    for (let i = 0; i < Math.ceil(songs.length / itemsPerPage); i++){
      pageNumbers.push(i)
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li className="page-item"
          key={number}
          >
          <button type="btn btn-link"
            id={(number + 1)}
            onClick={this.handleClick}>{number + 1}</button>
        </li>
      );
    });

    return (
      <div className="App">
        <header className="App-header">
          <div className="container">
            <div className="row">

              <Logo
                siteTitle={'Austins iTunes Portal'}
                className={'col-sm-3 logo'} />

              <div className="col-sm-9 d-flex justify-content-end">
                <form className="search-form" onSubmit={this.onSubmit}>
                  <div className="col-lg-12">

                    <MediaSelect
                      name="media-type"
                      handleChange={this.handleMediaChange} />

                    <div className="form-group search-input col-lg-12">
                      <SearchInput
                        placeholder={"Search for music here"}
                        handleChange={this.handleArtist}
                        value={this.state.value} />

                      <SearchButton
                        action={this.handleSubmit}
                        type={"btn"}
                        title={"Submit"}/>
                    </div>

                  </div>
                </form>
              </div>

            </div>
          </div>
        </header>

        <section className="App-body">
          <div className="container">
            <div className="row">

              <Pagination
                currentPage={this.state.currentPage}
                pageNumbers={renderPageNumbers}
                handleClick={this.handleClick}
                className={'col-sm-3'} />

              <SearchStats
                value={this.state.value}
                numSongs={this.state.numSongs}
                mediaType={this.state.mediaType}
                songs={this.state.songs}
                className={'col-sm-6 float-left text-center search-stats'} />

              <ItemsPerPage
                handleChange={this.handlePageItems}
                numSongs={this.state.numSongs}
                allItems={allSongsLen}
                className={'col-sm-3 form-group media-select float-right text-right'} />
            </div>

            <div className="row">
              <List
                songs={currSongList}
                currentPage={currentPage}
                itemsPerPage = {this.itemsPerPage}
                mediaType={ this.state.mediaType}
                numSongs = {this.state.numSongs}
                value = {this.state.value}
                date={this.state.songs.releaseDate} />

            </div>
          </div>
        </section>
      </div>
    );
  }

}

export default App;
