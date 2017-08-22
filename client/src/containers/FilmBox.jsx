import React from "react";

import FilmTitle from "./../components/FilmTitle";
import FilmList from "./../components/FilmList";
import SeeMore from "./../components/SeeMore";
import GetShowTimesButton from "./../components/GetShowTimesButton";

const films = [
  {id: 0, name: "Sausage Party", link: "http://www.imdb.com/title/tt1700841/"},
  {id: 1, name: "Cafe Society", link: "http://www.imdb.com/title/tt4513674/?ref_=nv_sr_1"},
  {id: 2, name: "Morgan", link: "http://www.imdb.com/title/tt4520364/?ref_=fn_al_tt_1"},
];

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
        <SeeMore/>
        <hr/>
        <GetShowTimesButton/>
      </div>
    );
  }
}

export default FilmBox;
