import React from 'react';
import { connect } from 'react-redux';

import {Container, Row, Col} from 'reactstrap';
import InputTodo from '../InputTodo/InputTodo';
import ListTodo from '../ListTodo/ListTodo';
import TitleTodo from '../TitleTodo/TitleTodo';

class App extends React.Component{
   constructor(props) {
      super(props);	
	  
	  //this.props.addStore('new_data_store');  
   }
   
   render(){
     return (
         <Container>
		 <br/>
		  <Row>
		    <Col xs="6">
               <TitleTodo/>
			</Col>
		  </Row>
		  
		  <Row>
		    <Col xs="6">
               <ListTodo/>
			</Col>
		  </Row>
		  <br/>
		  
		  <Row>
		    <Col xs="6">
               <InputTodo/>
			</Col>
		  </Row>		  
		</Container>
   )}
}

export default connect(
  state => ({ store: state }),
  dispatch => ({	  
    addStore: ( newData ) => {
      dispatch({ type: 'ADD_STORE', data: newData})
    }
  })
)(App);