import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import { createTodos } from "./utils.js";
import TodoList from "./ToDoList.js";

const todos = createTodos();



function App() {

 const [tab, setTab] = useState("all");
 
 return (
   <>
     <button onClick={() => setTab("all")}>All</button>
     <button onClick={() => setTab("active")}>Active</button>
     <button onClick={() => setTab("completed")}>Completed</button>
     <button onClick={() => setTab("work")}>Work</button>
     <button onClick={() => setTab("study")} >study</button>
     <button onClick={() => setTab("entertainment")}>entertainment</button>
     <button onClick={() => setTab("family")}>family</button>

     <br />
  
     <hr />
     <TodoList todos={todos} tab={tab}   />
   </>
 );




}

export default App;













































/*
const [counter,setCounter] =useState(0);
console.log(counter);


function handleClick(){
  setCounter(counter+1)
}
function handleClickToZero(){
  setCounter(0)
}
function handleClickToTwenty(){
  setCounter(20)
}

return (
  <div className='App' >
   
    <span onClick={handleClick}>{counter}</span>
    <button onClick={handleClickToZero} >0</button>
    <button onClick={handleClickToTwenty}>20</button>
  </div>
);
*/
/*
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/