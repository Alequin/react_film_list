import React from "react";

import Film from "./../components/Film";

class FilmList extends React.Component{
  render(){

    const films = this.props.data;
    const filmListElements = films.map(
      (film) => <Film filmName={film.name} filmLink={film.link}/>
    );

    return (
      <div className="film-list">
        {filmListElements}
      </div>
    );
  }
}

export default FilmList;
