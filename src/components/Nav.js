import React from 'react';
import ReactDOM from 'react-dom';

class Nav extends React.Component {
    render() {
        return(
            <nav>
                <div className="navbar">
                    <a href='' className="nav-item">Home</a>
                    <a href='' className="nav-item">Articles</a>
                </div>
            </nav>
        )
    }
}

export default Nav;