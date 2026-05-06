import React from "react";
import Article from './article.jsx'

function ArticleList(props) {
    return (        
        <div>
            {props.posts.map(post => (
                <Article 
                    key={post.id} 
                    title={post.title} 
                    date={post.date} 
                    preview={post.preview} 
                />
            ))}
        </div>
    );
}
export default ArticleList;