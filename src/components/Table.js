import React, {useState} from "react";
import employeeJson from '../employees.json'


function Table(props) {

    let employeeItems, i=0, renderEmployeeArray = [];


    const [searchName, setSearchName] = useState({
        name: ""
    })

    const handleSubmit = e => {
        e.preventDefault();
 
    }

    const handleChange = e => {
        setSearchName({ ...searchName, name: e.target.value})
        //console.log(searchName.name);
    }

    if (searchName.name === "") {
         employeeItems = employeeJson.employees.map(employee => 

            <tr key = {employee.id}>
            <th  scope ="row">{employee.id}</th>
            <td className ="w-25"> <img src= {employee.photo} className ="img-fluid img-thumbnail" alt = {employee.name}></img></td>
            <td>{employee.name}</td>
            <td>{employee.position}</td>
            <td>{employee.email}</td>
        </tr>
        
    )} else {
        for (i=0; i< employeeJson.employees.length; i++) {
            if ((employeeJson.employees[i].name).includes(searchName.name)) {
                renderEmployeeArray[i] = employeeJson.employees[i];
            }
        }

        employeeItems = renderEmployeeArray.map(employee => 

            <tr key = {employee.id}>
            <th  scope ="row">{employee.id}</th>
            <td className ="w-25"> <img src= {employee.photo} className ="img-fluid img-thumbnail" alt = {employee.name}></img></td>
            <td>{employee.name}</td>
            <td>{employee.position}</td>
            <td>{employee.email}</td>
        </tr>
        )}


    return (
        <div className = "container">
            <div className ="row">
                <div className="col-4"></div>
                    <form className="form-inline" onSubmit={handleSubmit}>
                        <div className="form-group mx-sm-4 mb-2">
                            <input type="name" className="form-control" id="inputSearchName" placeholder="Name (Case Sensitive)" onChange={handleChange}></input>
                        </div>
                        <button type="submit" className="btn btn-primary mb-2">Filter</button>
                    </form>
            </div>

            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Photo</th>
                    <th scope="col">Name</th>
                    <th scope="col">Position</th>
                    <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    { employeeItems }
                </tbody>
            </table>
        </div>

        
    );
}

export default Table;