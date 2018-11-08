import React from 'react';
import { connect } from 'react-redux';

import {Alert, Col, Row} from 'reactstrap';

import Icon from '@mdi/react'
import {mdiDelete} from '@mdi/js'


class TitleTodo extends React.Component{
   constructor(props) {
      super(props);	
      this.state = {};
	  
	  this.clickDel = () => this.props.addStore({});
   }
   

   render(){
     return (
   <Alert color="secondary">
	 <Row>
		<Col xs="10"><b style={{color:'gray'}}>TODOlist</b></Col>
		<Col xs="2"><Icon path={mdiDelete} size={1} color="white"  onClick={this.clickDel}/></Col>
	 </Row>
   </Alert>
      
        
   )}
}

export default connect(
  state => ({ store: state }),
  dispatch => ({	  
     addStore: ({}) => {
      dispatch({ type: 'DEL_STORE', data: {} })
    }
  })
)(TitleTodo);