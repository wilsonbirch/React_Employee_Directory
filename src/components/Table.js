import React from "react";

function Table() {

    return (
        <div className = "container">
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Photo</th>
                    <th scope="col">Name</th>
                    <th scope="col">Position</th>
                    <th scope="col">Email</th>
                    </tr>
                </thead>
            </table>
        </div>
    );
}

export default Table;