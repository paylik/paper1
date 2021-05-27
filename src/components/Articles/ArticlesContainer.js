import React from "react";
import {
    addArticleActionCreator,
    updateNewArticleContentActionCreator,
    updateNewArticleTitleActionCreator
} from "../../redux/article-reduser";
import Articles from "./Articles";
import StoreContext from "../../StoreContext";

const ArticlesContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    let addArticle = () => {
                        store.dispatch(addArticleActionCreator());
                    }

                    let onArticleTitleChange = (title) => {
                        let action = updateNewArticleTitleActionCreator(title);
                        store.dispatch(action);
                    }

                    let onArticleContentChange = (content) => {
                        let action = updateNewArticleContentActionCreator(content);
                        store.dispatch(action);
                    }

                    return (
                        <Articles
                            updateNewArticleTitle = { onArticleTitleChange }
                            updateNewArticleContent = { onArticleContentChange }
                            addArticle = { addArticle }
                            articles = { state.articleReducer.articles }
                            newArticleTitleText = { state.articleReducer.newArticleTitleText }
                            newArticleContentText = { state.articleReducer.newArticleContentText }>

                        </Articles>

                    )
                }
            }
        </StoreContext.Consumer>
    )
}

export default ArticlesContainer;