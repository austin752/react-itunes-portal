import React from 'React';
import MediaSelect from './media-select/media-select';
import SearchInput from './search-input/search-input';



const HeaderSearch = props => {
  return (
    <div className="col-lg-12 col-md-10 col-sm-8 d-flex justify-content-end">
      <form className="col-lg-8" onSubmit={props.onSubmit}>
        <div className="col-lg-12">

          <MediaSelect
            name="media-type"
            handleMediaChange={props.handleMediaChange} />

          <SearchInput
            placeholder={"Search for music here"}
            handleChange={props.handleArtist}
            value={props.state.value} />
        </div>
      </form>
    </div>
  )
}

export default HeaderSearch