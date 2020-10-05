import React from "react";
import logo from '../logo.svg';

function Header() {

    return (
        <div className="jumbotron text-center">
            <h1 className="display-4">Employee Directory</h1>
            <div className="App">
            <img src={logo} className="App-logo" alt="logo" />
          </div>

        </div> 

        
    );
}

export default Header;