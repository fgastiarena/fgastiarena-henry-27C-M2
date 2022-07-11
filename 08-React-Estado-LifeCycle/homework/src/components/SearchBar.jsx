import React, {useState} from "react";
import styles from '../styles/SearchBar.module.css';
// import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  //(props)
  // const [input, setInput] = useState('');
  // acá va tu código
  const [city, setCity] = useState('');

  // const handleInput = (e) => {
  //   setCity(e.target.value)
  // }

  // document.getElementById('#input').addEventListener('onChange',handleinput)

  // function onChange(e) {
  //   // setCity(e.target.value);
  //   // return e;
  // }

  // const buscar = () => {
  //   const inputSearch = document.querySelector("#inputSearch");
  //   onSearch(inputSearch.value);
  // };

  return (
    <div className={`${styles.searchBar} container-fluid`}>

      <form className="form-inline" onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      // setValue('');
      }}>
      
      {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button> */}
      <input 
          className="form-control" 
          autoFocus={true} 
          id='inputSearch' 
          type="text" 
          placeholder="Ciudad..."
          value={city}
          onChange={e => setCity(e.target.value)} //handleInput
        >
        </input>
      <button
          id={styles.searchButton}
          className="btn btn-outline-success" 
          // onClick={onChange(city)} 
          typeof="submit"
      >
            Agregar
      </button>
      </form>
    </div>
  );
}


//mr-sm-2
// my-2 my-sm-0