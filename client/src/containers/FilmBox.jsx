import React from "react";
import roll from "./../dice.js"

import FilmTitle from "./../components/FilmTitle";
import FilmList from "./../components/FilmList";
import SeeMore from "./../components/SeeMore";
import GetShowTimesButton from "./../components/GetShowTimesButton";

const films = [
  {id: 0, name: "Sausage Party", link: "http://www.imdb.com/title/tt1700841/"},
  {id: 1, name: "Cafe Society", link: "http://www.imdb.com/title/tt4513674/?ref_=nv_sr_1"},
  {id: 2, name: "Morgan", link: "http://www.imdb.com/title/tt4520364/?ref_=fn_al_tt_1"},
  {id: 3, name: "The 9th Life Of Louis Drax", link: "http://www.imdb.com/title/tt3991412/?ref_=fn_al_tt_1"},
  {id: 4, name: "Naam Hai Akira", link: "http://www.imdb.com/title/tt5465370/?ref_=nv_sr_2"},
];

class FilmBox extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      filmToShow: this.getFilmsToShow()
    }
  }

  showMoreFilms(){
    this.setState({
      filmsToShow: this.getFilmsToShow()
    });
  }

  getFilmsToShow(){
    const max = films.length-1;
    const filmsToShow = [
      films[roll(0, max)],
      films[roll(0, max)]
    ];
    while(filmsToShow[0].id === filmsToShow[1].id){
      filmsToShow[1] = films[roll(0, max)];
    }
    return filmsToShow;
  }

  render(){
    return (
      <div className="film-box">
        <FilmTitle>UK Opening This Week</FilmTitle>
        <FilmList filmToShow={this.state.filmToShow}/>
        <SeeMore/>
        <hr/>
        <GetShowTimesButton/>
      </div>
    );
  }
}

export default FilmBox;
