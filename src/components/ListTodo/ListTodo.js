import React from 'react';
import { connect } from 'react-redux';

import {ListGroup, ListGroupItem} from 'reactstrap';
import Icon from '@mdi/react'
import { mdiCheckboxBlankCircleOutline, mdiCheckboxMarkedCircleOutline} from '@mdi/js'


class ListTodo extends React.Component{
   constructor(props) {
      super(props);	
      this.state = { todos: this.props.store.addStore };
	  
	  this.clickTodo = item => { 	  
	    this.props.addStore(item);	
		this.setState( {todos: this.props.store.addStore});		
	  };
   }
   
   componentWillReceiveProps(nextProps){
	   this.setState( {todos: nextProps.store.addStore})	
   }
   
   render(){
     return (
     <ListGroup>
	 {
	  this.state.todos.map( (item, i) => (
		 <ListGroupItem key={i} tag="button" action  onClick={ () => this.clickTodo(item) }>
		      
		 { !item.flag && (<Icon path={mdiCheckboxBlankCircleOutline} size={1} color="gray" />)}	  
		 { item.flag&& (<Icon path={mdiCheckboxMarkedCircleOutline} size={1} color="gray"/>)}
		 
		 {"      "}
		 {item.todo}	
		 
		 </ListGroupItem>
	  ))
	 }
	 </ListGroup>
   )}
}

export default connect(
  state => ({ store: state }),
  dispatch => ({	  
     addStore: ( newData ) => {
      dispatch({ type: 'CHANGE_STORE', data: newData })
    }
  })
)(ListTodo);