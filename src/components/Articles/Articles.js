import React, {useCallback, useEffect, useState} from "react";
import s from "./Articles.module.css"
import Article from "./Article/Article";
import AddForm from "../Forms/AddForm";
import firebase from "firebase";

const Articles = (props) => {

    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState([]);
    const [newArticle, setNewArticle] = useState(true)

    const getArticles = useCallback(() => {
        const ref = firebase.firestore().collection('articles');
        setLoading(true);
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push({...doc.data(), id: doc.id})
            });
            setArticles(items);
            setLoading(false);
        })
    }, [])

    useEffect(() => {
        console.log(articles)
        getArticles()
    }, [getArticles]);

    let addArticle = (values) => {
        let newArticle = {
            id: articles.length + 1,
            title: "values.newArticleTitle",
            content: "values.newArticleContent",
            likesCount: 0,
            like: false
        };

        return {
            articles: [...articles, newArticle]
        }
    }

    // useEffect(() => {
    //     addArticle()
    // }, [addArticle]);



    let onUpdateLikesCount = (id, quantity) => {
        props.updateLikesCount(id, quantity)
    }

    let articlesElements =
        articles.map(a => <Article
            key={a.id}
            article={a}
            onUpdateLikesCount={onUpdateLikesCount}
        />)


    return (
        <div className={s.articlesBlock}>
            <h3>Articles</h3>
            {newArticle ?
                <button onClick={() => setNewArticle(false)}> Add new article </button> :
                <AddForm onSubmit={addArticle}
                         onUpdateLikesCount={props.onUpdateLikesCount}
                />
            }
            {loading ?
                <div>Loading...</div> :
                <div className={s.articles}>
                    {articlesElements}
                </div>}
        </div>

    )
};

export default Articles;