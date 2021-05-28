
import {
    addArticleActionCreator,
    updateNewArticleContentActionCreator,
    updateNewArticleTitleActionCreator
} from "../../redux/article-reduser";
import Articles from "./Articles";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        articles: state.articleReducer.articles,
        newArticleTitleText: state.articleReducer.newArticleTitleText,
        newArticleContentText: state.articleReducer.newArticleContentText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewArticleTitle: (title) => {
            let action = updateNewArticleTitleActionCreator(title);
            dispatch(action);
        },
        updateNewArticleContent: (content) => {
            let action = updateNewArticleContentActionCreator(content);
            dispatch(action);
        },
        addArticle: () => {
            dispatch(addArticleActionCreator())
        }
    }
}

const ArticlesContainer = connect(mapStateToProps, mapDispatchToProps)(Articles)

export default ArticlesContainer;
