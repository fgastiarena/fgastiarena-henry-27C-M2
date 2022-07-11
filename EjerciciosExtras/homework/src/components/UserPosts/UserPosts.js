import React from 'react';
import { connect } from 'react-redux';
import { getAllUserPosts } from '../../actions';
import './UserPosts.css';


export class UserPosts extends React.Component {

  render() {
   
    return (
      <div className="details">
        <h4 className="title">Posts del usuario {/*userid*/}</h4>        
      </div>
    )
  }
}

export function mapStateToProps(state){
  return{
    userPosts: state.userPosts   //le pusimos userPost: pq en el test lo testea con ese nombre poresiso pero piuede ser cualquier npmbre
  }
}

export function mapDispatchToProps(dispatch){
  return {
    getAllUserPosts: () => dispatch(getAllUserPosts()) // getAllUserPosts() es un action creator por eso le pongo () pq la tengo que ejecutar
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPosts);