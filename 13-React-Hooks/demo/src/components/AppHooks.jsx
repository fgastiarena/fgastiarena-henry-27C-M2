import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { saveName } from '../actions';

export default function AppHooks() {
  //como se representa este useState en un componente de clase?
  //constructor(props) {super(props); this.state = {name: 'Hooks', width: window.innerWidth}}  //window es el obj global y la prop inner que tiene el obj global
  //en Func Comp: useSate -> definir estados LOCALES

  const [name, setName] = useState('Hooks');
  const [width, setWidth] = useState(window.innerWidth)

  //buscamos como podemos reemplazar el connect con hooks
  // useDispatch -> store.dispatch() es decir aloja sobre la variable dispatch la funcion dispatch

  const dispatch = useDispatch() //dispatch se va a encargar de descahar las actions creators
  //esto de arriba es como si en el connect pasaramos {mapStateToProps, null}(AppHooks), como el segundo valor es null, lo que hacemos es psarle a AppHooks la funcion dispatch
  //ej dispatch(getMovies(name))
  //nos falta el estado global del store

  //useSelector viene a ser mapStateToProps, pero ya no tengo que hacer esta fn.
  //si no  -> function mapStateToProps(state){
  //      return { nameRedux: state.name }
  //}     ahora hacemos lo de abajo

  const nameRedux = useSelector(state => state.name)
  
  //useReducer(reducer, initialState) => [state, dispatch]

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)

    return () => {
      console.log('Entra...');
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  
  function handleChange(e) {
    setName(e.target.value)
  }

  useEffect(() => {
    document.title = name
  },[name])

  return (
    <div className="App">
      <input 
        value={name}
        onChange={handleChange}
      />
      <div>
        {width}
      </div>
      <button onClick={() => dispatch(saveName(name))}>
        Save Name
      </button>
      <div>
        {nameRedux}
      </div>
    </div>
  );
}

// Custom Hooks

// function useWindowWidth() {
//   const [width, setWidth] = useState(window.innerWidth);
//   useEffect(() => {
//     const handleResize = () => setWidth(window.innerWidth)
//     window.addEventListener('resize', handleResize)

//     return () => {
//       window.removeEventListener('resize', handleResize)
//     }
//   })
//   return width;
// }

// function useDocumentTitle(title) {
//   useEffect(() => {
//     document.title = title
//   },[title])
// }
