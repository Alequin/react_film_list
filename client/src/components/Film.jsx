import React from "react";

class Film extends React.Component{
  render(){

    const filmName =this.props.filmName;
    const filmLink = this.props.filmLink;

    return (
      <div className="film">
        <img src="bookmark.png"/>
        <a className="medium-text film-text" href={filmLink}>{filmName}</a>
        <a className="small-text showtime-text" href="#">showtime</a>
      </div>
    );
  }
}

export default Film;
