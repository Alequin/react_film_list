import React from "react";

import Film from "./../components/Film";

class FilmList extends React.Component{
  render(){
    console.log(this.props.data);
    return (
      <div className="film-list">
        <Film/>
        <Film/>
      </div>
    );
  }
}

export default FilmList;
