import React, {useEffect} from "react";
import s from "./Articles.module.css"
import Article from "./Article/Article";
import AddForm from "../Forms/AddForm";
import firebase from "firebase";

const Articles = (props) => {

    useEffect(() => {
        firebase.database().ref('paper').once('value')
            .then(a => console.log(a))
    })

    let addArticle = (values) => {
        props.addArticle(values)
    }

    let onUpdateLikesCount = (id, quantity) => {
        props.updateLikesCount(id, quantity)
    }

    let articlesElements =
        props.articles.map(a => <Article
            key={a.id}
            article={a}
            onUpdateLikesCount={onUpdateLikesCount}
        />)


    return (
        <div className={s.articlesBlock}>
            <h3>Articles</h3>
            <AddForm onSubmit = { addArticle }
                     onUpdateLikesCount = {props.onUpdateLikesCount}
            />
            <div className={s.articles}>
                {articlesElements}
            </div>
        </div>

    )
};

export default Articles;