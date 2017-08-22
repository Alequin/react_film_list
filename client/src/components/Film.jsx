import React from "react";

class Film extends React.Component{
  render(){
    return (
      <div className="film">
        <img src="bookmark.png"/>
        <a className="medium-text film-text" href="#">{this.props.filmName}</a>
        <a className="small-text showtime-text" href="#">showtime</a>
      </div>
    );
  }
}

export default Film;
