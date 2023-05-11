import React,{useState} from "react";
import ToDoLists from "./ToDoLists";
const App=()=> {
  const [inputList,setInputList]=useState("");
  const [Items,setItems]= useState([]);
  const itemEvent=(event)=>{
    setInputList(event.target.value);
  };
  const listofitem=()=>{
    setItems((olditems)=>{
      return [...olditems,inputList];
    });
    setInputList("");
  };
  const deleteItems=(id)=>{
    console.log("deleted");
    setItems((olditems)=>{
      return olditems.filter((arrElem,index)=>{
        return index!==id;
        return; 
      });
    });
};
  return( 
  <>
    <div className='main_div'>
    <div className="center_div">
     <br/>
     <h1> todo list </h1> 
     <br/>
     <input type="text" placeholder="add a item"
     value={inputList}
      onChange={itemEvent}/>
     <button onClick={listofitem}> + </button>
      <ol>
      {/* <li>{inputList}</li> */}
     {Items.map((itemval,index)=>{
     return <ToDoLists
      key={index} 
      id={index}
      onSelect={deleteItems}
      text={itemval}/>;
      })}
     </ol> 
    </div>
    </div>
  </> 
  );
};
export default App;