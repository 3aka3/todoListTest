import React from 'react';
import { connect } from 'react-redux';

import { InputGroup,  InputGroupAddon,  Input,  Button, Collapse, Alert} from 'reactstrap';
     
class InputTodo extends React.Component{
   constructor(props) {
      super(props);		  
	  
	  this.state= { 
	    valueInput: "", 
	    collapse: false
	  };
		
	  this.toggle = () =>  this.setState({ collapse: !this.state.collapse });
	  
	  this.changeInput = e => this.setState({valueInput: e.target.value, collapse: false});
	  
	  this.keyPressInput = e => {		  
		  if( e.charCode=='13'){
			  if( this.state.valueInput.trim().length<3) { console.log(0);
				  this.toggle();
				  return false;	
			  }				  
			  
			  this.props.addStore({todo: this.state.valueInput, flag:false});
		      this.setState({ valueInput: ""});
		  }
	  }
	  
      this.clickButton = (e) => {
		  if( this.state.valueInput.trim().length<3) {
			 this.toggle();
			 return false;	
		  }		  
		  this.props.addStore({todo: this.state.valueInput, flag:false});
		  this.setState({ valueInput: ""});
	  }
   }
  
   render(){
     return (
      <InputGroup>
	  
          <InputGroupAddon addonType="prepend">
		    <Button onClick={this.clickButton}>+</Button>
		  </InputGroupAddon>
		  
          <Input value={this.state.valueInput} onChange={this.changeInput} onKeyPress={this.keyPressInput}/>
		  
          <Collapse isOpen={this.state.collapse}><br/>
            <Alert color="danger">     
                неправильный ввод 
			</Alert>
          </Collapse>	  

       </InputGroup>
   )}
}

export default connect(
  state => ({ store: state }),
  dispatch => ({	  
    addStore: ( newData ) => {
      dispatch({ type: 'ADD_STORE', data: newData })
    }
  })
)(InputTodo);