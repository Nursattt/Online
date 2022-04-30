import './../css/Navbar.css';
import React from "react";

class Navbar extends React.Component {
    render() {
        return (
            <nav>
                <a href="#" className="links">{this.props.name}</a>
            </nav>
        );
    }
}

export default Navbar;