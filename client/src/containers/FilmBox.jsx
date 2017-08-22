import React from "react";
import FilmTitle from "./../components/FilmTitle";
import FilmList from "./../components/FilmList";

const films = ["Sausage Party", "Cafe Society", "Morgan"];

class FilmBox extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      data: films
    }
  }

  render(){
    return (
      <div className="film-box">
        <FilmTitle>UK Opening This Week</FilmTitle>
        <FilmList data={this.state.data}/>
      </div>
    );
  }
}

export default FilmBox;
