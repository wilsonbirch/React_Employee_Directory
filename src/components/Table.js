import React, {useState} from "react";
import employeeJson from '../employees.json'
import mikephoto from '../assets/prisonmike.png'
import dwightphoto from '../assets/dwightschrute.jpeg'
import creedphoto from '../assets/creedbratton.jpg'
import jimphoto from '../assets/jimhalpert.png'
import darylphoto from '../assets/darylphilbin.jpg'
import janphoto from '../assets/janlevinson.jpg'
import ryanphoto from '../assets/ryanhoward.jpg'
import stanleyphoto from '../assets/stanleyhudson.png'
import angelaphoto from '../assets/angelamartin.jpg'
import robertphoto from '../assets/robertcalifornia.jpg'


function Table(props) {
    
    let photo, i =0, renderEmployeeArray = [];

    const findPhoto = employee => {
        if(employee.photo === "mike"){
            photo = mikephoto;
        }

        if(employee.photo === "dwight"){
            photo = dwightphoto;
        }

        if(employee.photo === "creed"){
            photo = creedphoto;
        }

        if(employee.photo === "jim"){
            photo = jimphoto;
        }

        if(employee.photo === "angela"){
            photo = angelaphoto;
        }

        if(employee.photo === "stanley"){
            photo = stanleyphoto;
        }

        if(employee.photo === "ryan"){
            photo = ryanphoto;
        }

        if(employee.photo === "robert"){
            photo = robertphoto;
        }

        if(employee.photo === "jan"){
            photo = janphoto;
        }

        if(employee.photo === "daryl"){
            photo = darylphoto;
        }
    }

    function sortByName(array, key)
    {
     return array.sort(function(a, b)
     {
      var x = a[key]; var y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
     });
    }

    let [employeeItems, setEmployeeItems] = useState(
         employeeJson.rows.map(employee => {

            findPhoto(employee);

            return (
                <tr key = {employee.id}>
                <th  scope ="row">{employee.id}</th>
                <td className ="w-25"> <img src= {photo} className ="img-fluid img-thumbnail" alt = {employee.name}></img></td>
                <td >{employee.name}</td>
                <td>{employee.position}</td>
                <td>{employee.email}</td>
            </tr>
            )

            }));

    const [searchName, setSearchName] = useState({
        name: ""
    })

    const handleSubmit = e => {
        e.preventDefault();
    }

    const handleChange = e => {

        setSearchName({ ...searchName, name: e.target.value})

        for (i=0; i< employeeJson.rows.length; i++) {
            if ((employeeJson.rows[i].name).includes(searchName.name)) {
                renderEmployeeArray[i] = employeeJson.rows[i];
            }
        }

        let changedEmployeeArray = renderEmployeeArray.map(employee => {

            findPhoto(employee);

            return (
                <tr key = {employee.id}>
                <th  scope ="row">{employee.id}</th>
                <td className ="w-25"> <img src= {photo} className ="img-fluid img-thumbnail" alt = {employee.name}></img></td>
                <td >{employee.name}</td>
                <td>{employee.position}</td>
                <td>{employee.email}</td>
                </tr>
            )
         })
            setEmployeeItems(changedEmployeeArray);
        }

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
                        <th scope="col">ID</th>
                        <th scope="col">Photo</th>
                        <th scope="col" onClick= {() => setEmployeeItems(   
                            
                                sortByName(employeeJson.rows, "name").map(employee => {

                                findPhoto(employee);

                                return (
                                    <tr key = {employee.id}>
                                    <th  scope ="row">{employee.id}</th>
                                    <td className ="w-25"> <img src= {photo} className ="img-fluid img-thumbnail" alt = {employee.name}></img></td>
                                    <td >{employee.name}</td>
                                    <td>{employee.position}</td>
                                    <td>{employee.email}</td>
                                </tr>
                                )

                                }))}> Name (Click To Sort)
                        </th>
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