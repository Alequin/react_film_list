import React from "react";

class FilmTitle extends React.Component{
  render(){
    return (
      <h3>{this.props.children}</h3>
    );
  }
}

export default FilmTitle;
