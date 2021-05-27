import React from "react";
import s from "./Articles.module.css"
import Article from "./Article/Article";

const Articles = (props) => {

    let articlesElements =
        props.articles.map( a => <Article key={a.id} title={a.title} content={a.content} id={a.id} />)

    let newArticleTitle = React.createRef();
    let newArticleContent = React.createRef();

    let onArticleTitleChange = () => {
        let title = newArticleTitle.current.value;
        props.updateNewArticleTitle(title);
    }

    let onArticleContentChange = () => {
        let title = newArticleContent.current.value;
        props.updateNewArticleContent(title);
    }

    let onAddArticle = () => {
        props.addArticle();
    }

    return (
        <div className={s.articlesBlock}>
            <h3>Articles</h3>
            <div>
                <div>
                    <textarea onChange={ onArticleTitleChange } ref={ newArticleTitle }
                              value={props.newArticleTitleText} />
                </div>
                <div>
                    <textarea onChange={ onArticleContentChange } ref={ newArticleContent }
                              value={props.newArticleContentText} />
                </div>
                <div>
                    <button onClick={ onAddArticle }>Add article</button>
                </div>
            </div>
            <div className={s.articles}>
                { articlesElements }
            </div>
        </div>

    )
};

export default Articles;