import React from "react";
import ToDoRow from "./ToDoRow";


function ToDoInput(){

    const [toDoFormData, setToDoFormData] = React.useState([
        
    ])
    
    const [toDoData, setToDoData] = React.useState({
        toDoSubject:"",
        isChecked:false,
        toDoTime: "",
        toDoDescription:""
    })
    
    function handleEvent(event){
        const {name, value, type, checked} = event.target

        console.log(event)

        setToDoData(prevToDoData => {
            return{
                ...prevToDoData,
                [name]: type === "checkbox" ? checked : value


            }
        })


    }
    
    function handleSubmit(event){
        event.preventDefault()
        
        setToDoFormData(prevToDoFormData => [
            ...prevToDoFormData, toDoData
        ])
        
        setToDoData(
            {
                toDoSubject:"",
                isChecked:false,
                toDoTime: "",
                toDoDescription:""
            }
        )


    }


    function taskComplete(){

        setToDoData(prevIsChecked => !prevIsChecked)
    }


    return(
        <form onSubmit={handleSubmit}>
            <div className="row todoborder">
                <div className="col-sm-12 todoborder">
                    <div className="row ">
                        <div className="col-sm-6 toDoInputs">
                            <input type="text" placeholder="Objective" name="toDoSubject" id="" onChange={handleEvent} value={toDoData.toDoSubject} />

                        </div>

                        <div className="col-sm-6 toDoInputs">
                            <input type="time" placeholder="StartTime" name="toDoTime" id="" onChange={handleEvent}  value={toDoData.toDoTime} />
                        </div>
                        <div className="col-sm-2">
                            <input className="collapse" type="checkbox" name="isChecked" id="isChecked" checked={toDoData.taskComplete} onChange={handleEvent} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-8 toDoInputs">
                            <input type="text" placeholder="Description" name="toDoDescription" id="" onChange={handleEvent}   value={toDoData.toDoDescription} />
                        </div>
                        <div className="col-sm-2 toDoInputs">
                            <button className="rounded">Submit</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12">
                    <ToDoRow 
                        objectives = {toDoFormData}
                        handler = {handleEvent}
                    />
                </div>
            </div>
        </form>
    )

}   

export default ToDoInput