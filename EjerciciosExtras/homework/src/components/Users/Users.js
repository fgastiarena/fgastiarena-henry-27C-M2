import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getAllUsers } from '../../actions/index';
import './Users.css';
// import {store} from '../../store';


//Tenemos que conectar este componente a Redux con connect
export class Users extends Component {

  // constructor(...props){
  //   super(...props)
  //   this.state = {}
  // }

  // componentDidMount(){
  //   // store.dispatch(getAllUsers())
  //   this.props.users.getAllUsers()

  // }

  render() {
    return (
      <div className="details">
        <h4 className="title">Usuarios del blog</h4>
        {/* {this.props.map((user) => {
          return
        })} */}
        {/* Aqui deberias poner tu lista de usuarios! */}
        <table>
          <thead>
            <tr className="header">
              <th>Nombre</th>
              <th>Usuario</th>
              <th>Ver</th>
            </tr>
          </thead>
          <tbody>           
          </tbody>
        </table>
      </div>
    );
  }
}

export function mapStateToProps(state){
  return {
    users: state.users  //este state.users viene del index.js del reducer. y el user es un nombre random de como quiero que se llame la prop
  }
}

export function mapDispatchToProps(dispatch){
  return {
    getAllUsers: () => dispatch(getAllUsers()) //getAllUsers es como quiero que se llame la prop en mi component
                                              // en el index de actions no recibe parametro por eso en el arrow no le paso nada
  }
}

export default connect(
                  mapStateToProps, 
                  // {getAllUsers}, 
                  mapDispatchToProps)
                  (Users)

