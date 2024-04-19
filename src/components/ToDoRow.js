import React from "react";
import ToDoInput from "./ToDoInput";

function ToDoRowItem(todoData){
    console.log(todoData)
    return(
        <div className="col-sm-12">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <h2>{todoData.Subject}</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-10">
                        <b><p>{todoData.Time}</p></b>
                    </div>

                    <div className="col-sm-2">
                        <input type="checkbox" name="isChecked" id="isChecked" checked={todoData.isComplete} onChange={todoData.Handler} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <p>{todoData.Description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ToDoRow(Data){

    console.log(Data)
    let newHandler= Data.handler
    let todoDataMapped = Data.objectives.map(
        (currentToDoItem) => {
            return <ToDoRowItem
            Subject = {currentToDoItem.toDoSubject}
            Time = {currentToDoItem.toDoTime}
            isComplete = {currentToDoItem.isChecked}
            Description = {currentToDoItem.toDoDescription}
            Handler = {newHandler}
            />
        }
    )


    return(
        <div className="row">
            <div className="col-sm-12">
                {todoDataMapped}
            </div>
        </div>
    )
}

export default ToDoRow