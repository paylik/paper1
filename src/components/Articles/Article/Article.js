import React from "react";
import s from "./Article.module.css";

const Article = (props) => {
    return (
        <div className={s.item}>
            <h4>{props.title}</h4>
            <div>{props.content}</div>
        </div>
    )
}
;

export default Article;