export default function( state = [], action){ 
  
  if( action.type == "ADD_STORE"){ 
  
    return [ action.data, ...state ];  
  } 
  
  if( action.type == "CHANGE_STORE"){ 
  
	let temp = state;
	temp.forEach(t => (t.todo==action.data.todo)&& (t.flag = !t.flag));
    return temp;  
  } 
  
  if( action.type == "DEL_STORE"){   
  
    console.log(action.data);
    return state.filter( item =>  item.flag != true );  	
  }  
  
  return state;
}
