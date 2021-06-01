
import {
    addArticleActionCreator,
    updateNewArticleContentActionCreator,
    updateNewArticleTitleActionCreator,
    updateLikesCountAC
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
        },

        updateLikesCount: (id, quantity) => {
            dispatch(updateLikesCountAC(id, quantity))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles)
