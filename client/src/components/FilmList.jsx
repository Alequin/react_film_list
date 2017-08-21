import React from "react";

import Film from "./../components/Film";

class FilmList extends React.Component{
  render(){
    return (
      <div className="film-list">
        <Film/>
      </div>
    );
  }
}

export default FilmList;
