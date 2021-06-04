import {
    addArticle,
    updateNewArticleContent,
    updateNewArticleTitle,
    updateLikesCount
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

export default connect(mapStateToProps, {
    updateNewArticleTitle,
    updateNewArticleContent,
    addArticle,
    updateLikesCount
})(Articles)
