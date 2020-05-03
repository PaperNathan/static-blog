import React from 'react';
import ReactDOM from 'react-dom';

import reading from '../articles/articles.json';

class Articles extends React.Component {
    loadArticles() {
        let thumbnails = [];
        for (let i=0; i<reading.length; i++) {
            thumbnails.push(
                    <div>
                        <h1>{reading[i].title}</h1>
                        <p>{reading[i].author}</p>
                        <p>{reading[i].content}</p>
                    </div>
                )
        }
        return thumbnails;
    }

    render() {
        return(
            <div>
                {this.loadArticles()}
            </div>
        )
    }
}

export default Articles;