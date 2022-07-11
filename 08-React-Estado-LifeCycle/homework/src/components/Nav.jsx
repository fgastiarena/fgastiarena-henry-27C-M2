import React from 'react';
import Logo from '../logoHenry.png'
// import SearchBar from './SearchBarCopy.jsx';
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (

    <div id='barraNav' className="navbar navbar-light ">
      <img src={Logo} alt="Logo Henry" />
      <h1 className='mainTitle'>Weather App Henry</h1>
      <div>
        <SearchBar onSearch={onSearch}/>
      </div>
    </div>

  );
};

export default Nav;
