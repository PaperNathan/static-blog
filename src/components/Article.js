import React from 'react';
import ReactDOM from 'react-dom';

class Article extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="picture">
                    <img src={this.props.image} alt='random'></img>
                </div>
                
                <div className="content">
                    <div className="title">{this.props.content.title}</div>
                    <div className="article-text">{this.props.content.content}</div>
                </div>
            </div>
        )
    }
}

export default Article;

