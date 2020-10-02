import React from "react";

function SearchBar() {

    return (
        <div className = "container">
            <div className ="row">
                <div className="col-4"></div>
                    <form class="form-inline">
                    <div class="form-group mx-sm-4 mb-2">
                        <input type="Name" class="form-control" id="inputPassword2" placeholder="Name"></input>
                    </div>
                    <button type="submit" class="btn btn-primary mb-2">Filter</button>
                    </form>

            </div>
        </div>

        
    );
}

export default SearchBar;