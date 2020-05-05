import React from 'react';
import ReactDOM from 'react-dom';

class Nav extends React.Component {
    render() {
        return(
            <nav>
                <div className="navbar">
                    <div className="logo">Test Blog</div>
                    <div className="hamburger">
                        <div className='top-ham'></div>
                        <div className='bot-ham'></div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav;