import React from 'react';

import Nav from './Nav';
import Articles from './Articles';

class Container extends React.Component {
    render() {
        return(
            <div className="container-outer">
                <Nav />
                <div className="container-inner">
                    <Articles />
                </div>
            </div>
        )
    }
}

export default Container;