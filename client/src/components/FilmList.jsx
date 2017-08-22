import React from "react";

import Film from "./../components/Film";

class FilmList extends React.Component{
  render(){
    console.log(this.props.data);
    return (
      <div className="film-list">
        <Film filmName={this.props.data[0]}/>
        <Film filmName={this.props.data[1]}/>
      </div>
    );
  }
}

export default FilmList;
