import React from "react";
import s from "./Article.module.css";

const Article = (props) => {
    return (
        <div className={s.item}>
            <h4>{props.article.title}</h4>
            <div>{props.article.content}</div>
            <div>
                <h4>Likes {props.article.likesCount}</h4>
                {props.article.like ? (
                    <button onClick={() => props.onUpdateLikesCount(props.article.id, -1)}>Dislike</button>
                ) : (
                    <button onClick={() => props.onUpdateLikesCount(props.article.id, 1)}>Like</button>
                )}
            </div>
        </div>
    )
}
;

export default Article;