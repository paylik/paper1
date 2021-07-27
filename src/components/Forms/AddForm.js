import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLength, requiredField} from "../../utils/validators";
import {TextArea} from "../../utils/FormsControl";
import s from "./AddForm.module.css"
import firebase from "firebase";

const maxLength100 = maxLength(100);
const maxLength500 = maxLength(500);

const AddForm = ({handleSubmit, setNewArticle, reset}) => {

    const addArticle = (values) => {
        const id = Date.now().toString()
        const ref = firebase.firestore().collection('articles').doc(id);

        const newArticle = {
            title: values.newArticleTitle,
            content: values.newArticleContent,
            likesCount: 0,
            like: false
        }

        ref.set(newArticle)
            .then((article) => {
                console.log("You add new article with ID: ", id)
            })
            .catch((error) => {
                console.log("Error: ", error)
            })
        reset();
        setNewArticle(true);
    };

    return (
        <form onSubmit={handleSubmit(addArticle)}>
            <div>
                <Field
                    component={TextArea}
                    name="newArticleTitle"
                    placeholder="Title"
                    validate={[requiredField, maxLength100]}
                    className={`${s.addForm} ${s.title}`}
                />
                <Field
                    component={TextArea}
                    name="newArticleContent"
                    placeholder="Content"
                    validate={[requiredField, maxLength500]}
                    className={s.addForm}
                    rows="5"
                />
            </div>
            <div>
                <button className="btn btn-outline-success" type="submit"> Send</button>
                <button className="btn btn-outline-danger" onClick={() => setNewArticle(true)}>Cancel</button>
            </div>
        </form>
    )
};

export default reduxForm({form: "dialogAddForm"})(AddForm);
