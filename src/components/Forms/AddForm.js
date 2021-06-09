import React from "react";
import {Field, reduxForm} from "redux-form";
// import s from "./AddForm.module.css"

const Form = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newArticleTitle" placeholder="Title"/>
                <Field component="textarea" name="newArticleContent" placeholder="Content"/>
            </div>
            <div>
                <button> Send</button>
            </div>
        </form>
    )
}

const AddForm = reduxForm({form: "dialogAddForm"})(Form)

export default AddForm;
