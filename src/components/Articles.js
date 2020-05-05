import React from 'react';
import ReactDOM from 'react-dom';

import Article from './Article';

import reading from '../articles/articles.json';

class Articles extends React.Component {
    loadArticles() {
        let thumbnails = [];
        for (let i=0; i<reading.length; i++) {
            thumbnails.push(
                <Article content={reading[i]} image="https://picsum.photos/160" />
            )
        }
        return thumbnails;
    }

    render() {
        return(
            <div className="article-container">
                {this.loadArticles()}
            </div>
        )
    }
}

export default Articles;