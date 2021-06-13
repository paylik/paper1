
const ADD_ARTICLE = 'ADD_ARTICLE';
const UPDATE_LIKES_COUNT = 'UPDATE_LIKES_COUNT';

let initialState = {

    articles: [
        {
            id: 1,
            title: 'Baylor cop investigating sex assault told accused football ' +
                'players she wanted to \'keep it quiet\'',
            content: 'A Baylor University police detective investigating an alleged ' +
                'on-campus sexual assault told two accused football players that she ' +
                'wanted to “keep it quiet” and did not want to “take down the football team,” ' +
                'according to testimony heard Tuesday in a Houston courtroom.',
            likesCount: 11,
            like: false
        },
        {
            id: 2,
            title: 'Katy man is seventh Houston-area resident charged in Capitol riot',
            content: 'Adam Weibling was taken into custody by FBI Bryan agents. ' +
                'He was charged with violent entry and disorderly conduct on Capitol ' +
                'grounds as well as knowingly entering or remaining in restricted grounds ' +
                'without lawful authority. He is the seventh Houston-area resident to be ' +
                'arrested in connection to the Capitol insurrection on Jan. 6.',
            likesCount: 4,
            like: false
        },
        {
            id: 3,
            title: 'Mistrial declared in murder trial of Simone Biles\' brother',
            content: 'CLEVELAND (AP) — A judge in Ohio declared a mistrial in the murder' +
                ' trial of the brother of Olympic gymnastics champion Simone Biles ' +
                'after jurors said they had read legal paperwork that inadvertently ' +
                'was included in evidence given to them to review.',
            likesCount: 3,
            like: false
        },
        {
            id: 4,
            title: 'NASA is developing new missions to help fight climate change',
            content: 'The announcement came Monday as part of a broader White House ' +
                'push to enhance climate change resilience. ' +
                'In addition to "next generation climate data systems at NASA," ' +
                'President Joe Biden\'s administration said it\'s directing $1 billion ' +
                'in pre-disaster mitigation resources to help communities prepare for ' +
                'extreme weather and other disasters.',
            likesCount: 8,
            like: false
        }
    ]
};

const articleReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_ARTICLE:
            let newArticle = {
                id: state.articles.length + 1,
                title: action.values.newArticleTitle,
                content: action.values.newArticleContent,
                likesCount: 0,
                like: false
            };

            return {
                ...state,
                articles: [...state.articles, newArticle]
            }

        case UPDATE_LIKES_COUNT:
            return {
                ...state,
                articles: state.articles.map( a => {
                    if (a.id === action.id) {
                        return {...a, likesCount: a.likesCount + action.quantity, like: !a.like}
                    }
                    return a;
                })
            }
        default:
            return state;
    }
};

export const addArticle = (values) => ({type: ADD_ARTICLE, values});

export const updateLikesCount = (id, quantity) => ({
    type: UPDATE_LIKES_COUNT, id, quantity
})

export default articleReducer;