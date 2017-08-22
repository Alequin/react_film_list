import React from "react";

class SeeMore extends React.Component{
  render(){
    return (
      <div className="see-more-link">
        <a className="small-text" href="#" onClick={this.props.showMoreFilms}>
          See more opening this week >>
        </a>
      </div>
    );
  }
}

export default SeeMore;
