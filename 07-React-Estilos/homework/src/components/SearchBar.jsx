import React from "react";
import styles from '../styles/SearchBar.module.css';
// import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  //(props)
  // const [input, setInput] = useState('');
  // acá va tu código

  const buscar = () => {
    const inputSearch = document.querySelector("#inputSearch");
    onSearch(inputSearch.value);
  };

  return (
    <div className={styles.searchBar}>
      <input autoFocus={true} id="inputSearch" type="text" placeholder="Ciudad..."></input>
      <button onClick={buscar}>Agregar</button>
    </div>
  );
}
