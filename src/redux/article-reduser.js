const ADD_ARTICLE = 'ADD_ARTICLE';
const UPDATE_NEW_ARTICLE_TITLE = 'UPDATE_NEW_ARTICLE_TITLE';
const UPDATE_NEW_ARTICLE_CONTENT = 'UPDATE_NEW_ARTICLE_CONTENT';

let initialState = {
    articles: [
        {
            id: 1,
            title: 'Baylor cop investigating sex assault told accused football ' +
                'players she wanted to \'keep it quiet\'',
            content: 'A Baylor University police detective investigating an alleged ' +
                'on-campus sexual assault told two accused football players that she ' +
                'wanted to “keep it quiet” and did not want to “take down the football team,” ' +
                'according to testimony heard Tuesday in a Houston courtroom.'
        },
        {
            id: 2,
            title: 'Katy man is seventh Houston-area resident charged in Capitol riot',
            content: 'Adam Weibling was taken into custody by FBI Bryan agents. ' +
                'He was charged with violent entry and disorderly conduct on Capitol ' +
                'grounds as well as knowingly entering or remaining in restricted grounds ' +
                'without lawful authority. He is the seventh Houston-area resident to be ' +
                'arrested in connection to the Capitol insurrection on Jan. 6.'
        },
        {
            id: 3,
            title: 'Mistrial declared in murder trial of Simone Biles\' brother',
            content: 'CLEVELAND (AP) — A judge in Ohio declared a mistrial in the murder' +
                ' trial of the brother of Olympic gymnastics champion Simone Biles ' +
                'after jurors said they had read legal paperwork that inadvertently ' +
                'was included in evidence given to them to review.'
        },
        {
            id: 4,
            title: 'NASA is developing new missions to help fight climate change',
            content: 'The announcement came Monday as part of a broader White House ' +
                'push to enhance climate change resilience. ' +
                'In addition to "next generation climate data systems at NASA," ' +
                'President Joe Biden\'s administration said it\'s directing $1 billion ' +
                'in pre-disaster mitigation resources to help communities prepare for ' +
                'extreme weather and other disasters.'
        }
    ],
    newArticleTitleText: '',
    newArticleContentText: ''
};

const articleReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_ARTICLE:
            let newArticle = {
                id: initialState.articles.length,
                title: state.newArticleTitleText,
                content: state.newArticleContentText
            };
            state.articles.push(newArticle);
            state.newArticleContentText = '';
            state.newArticleTitleText = '';
            return state;
        case UPDATE_NEW_ARTICLE_TITLE:
            state.newArticleTitleText = action.newTitle;
            return state;
        case UPDATE_NEW_ARTICLE_CONTENT:
            state.newArticleContentText = action.newContent;
            return state;
        default:
            return state;
    }
};

export const addArticleActionCreator = () => ({type: ADD_ARTICLE});
export const updateNewArticleTitleActionCreator = (text) => ({
    type: UPDATE_NEW_ARTICLE_TITLE, newTitle: text
});
export const updateNewArticleContentActionCreator = (text) => ({
    type: UPDATE_NEW_ARTICLE_CONTENT, newContent: text
});

export default articleReducer;