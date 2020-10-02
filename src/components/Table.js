import React from "react";
//import Employees from "public/employees.json"
import employeeJson from '../employees.json'

function Table(props) {

    const employeeItems = employeeJson.employees.map(employee => 
        <tr>
        <th scope ="row">{employee.id}</th>
        <td class ="w-25"> <img src= {employee.photo} class ="img-fluid img-thumbnail" alt = {employee.name}></img></td>
        <td>{employee.name}</td>
        <td>{employee.position}</td>
        <td>{employee.email}</td>
    </tr>)

    return (
        <div className = "container">
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