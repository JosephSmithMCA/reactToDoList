import ToDoRow from "./ToDoRow";
import Header from "./Header";
import ToDoInput from "./ToDoInput";

function ToDoList(){



    return(
        <div className="col-sm-4 todoColor bumpDown">
            <div className="row ">
                <Header/>
            </div>
            <div className="row">
                <ToDoInput/>
                {/* <ToDoRow/> */}
            </div>
        </div>
    )
}

export default ToDoList;