import React from 'react';
import convert from 'htmr';

import "styles/scss/post.scss";

const PostResume = ({ author, title, category, date, resume }) => {
    return (
        <div className="post-wrapper">
            <div className="header-content">               
                <h1 className="title is-4">
                    {title}
                </h1>
                <small><i>Postado em <a href="category.html"> {category}</a> em
            <a href="post.html"> {date}</a> por
            <a href="category.html"> {author}</a></i></small>
            </div>
            <div className="content">
                {convert(resume || '')}
            </div>
            <div className="content-footer">               
                <p><a className="button menu-label">Continuar lendo</a></p>
            </div>
        </div>
    )
};

export default PostResume;