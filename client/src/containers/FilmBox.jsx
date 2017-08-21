import React from "react";
import FilmTitle from "./../components/FilmTitle";
import FilmList from "./../components/FilmList";

class FilmBox extends React.Component{
  render(){
    return (
      <div>
        <FilmTitle>UK Opening This Week</FilmTitle>
        <FilmList/>
      </div>
    );
  }
}

export default FilmBox;
