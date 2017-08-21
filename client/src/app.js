import React from 'react';
import ReactDOM from 'react-dom';

import FilmBox from './containers/FilmBox'

window.onload = function(){
  ReactDOM.render(
    <FilmBox/>,
    document.getElementById('app')
  );
}
