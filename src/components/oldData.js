function oldToDoRow(objectivelist){
    console.log(objectivelist)


    return(
        <div className="col-sm-12 todoborder">

            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 d-flex justify-content-center text-center todoborder">
                        {/* <h3>{objectivelist.subject}</h3> */}
                        <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
                    </div>
                </div>

                <div className="row ">
                    <div className="col-sm-6 ">
                        {/* <p>{objectivelist.time}</p> */}
                        <p>12:00</p>
                    </div>
                    <div className="col-sm-6 d-flex justify-content-end">
                        <label htmlFor="todoChecked">Task Completed: </label>
                        <input type="checkbox" name="todoChecked" id="" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12 ">
                        {/* <p>{objectivelist.description}</p> */}
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente exercitationem voluptates hic nobis, nemo eius. Eius consequuntur, dolor eveniet, tenetur inventore unde voluptates aliquid dicta accusantium eum incidunt odit quod.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

