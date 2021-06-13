import {
    addArticle,
    updateLikesCount
} from "../../redux/article-reduser";
import Articles from "./Articles";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        articles: state.articleReducer.articles,
    }
}

export default connect(mapStateToProps, {
    addArticle,
    updateLikesCount
})(Articles)
