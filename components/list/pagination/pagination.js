import React from 'react';

const Pagination = (props) => {
	// console.log('TCL: Pagination -> props', props);
  return (
    <div className={props.className}>
      <nav aria-label="pagination" className="float-left">
        <ul className="pagination">
          {props.pageNumbers}
        </ul>
        <div className="row"></div>
      </nav>
    </div>
  )
}

export default Pagination