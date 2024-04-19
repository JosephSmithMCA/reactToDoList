import React from "react";
import ToDoRow from "./components/ToDoRow"
import ToDoList from "./components/ToDoList";
import ToDoInput from "./components/ToDoInput";
import "./style.css"

function App(){
    
    return(
        <div className="row justify-content-center">
            <ToDoList/>
        </div>
    )
}

export default App;