import React from "react";
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../../utils/FormsControl";
import {maxLength, requiredField} from "../../utils/validators";
import s from "./AddForm.module.css";
import firebase from "firebase";

const maxLength50 = maxLength(50);
const maxLength100 = maxLength(100);

const AddCommercial = (props) => {

    const {handleSubmit, reset} = props

    const addCommercial = (values) => {

        const ref = firebase.firestore().collection('articles');

        console.log(values.newCommercialTitle);
        reset();
        props.setAdd(true)
    };

    return (

        <form onSubmit={handleSubmit(addCommercial)}>
            <div>
                <Field
                    component={TextArea}
                    name="newCommercialTitle"
                    placeholder="Title"
                    validate={[requiredField, maxLength50]}
                    className={`${s.addForm} ${s.title}`}
                />
                <Field
                    component={TextArea}
                    name="newCommercialContent"
                    placeholder="Description"
                    validate={[requiredField, maxLength100]}
                    className={s.addForm}
                    rows="5"
                />
                <Field
                    component={TextArea}
                    name="newCommercialContacts"
                    placeholder="Contacts"
                    validate={[requiredField, maxLength100]}
                    className={s.addForm}
                />
            </div>
            <div>
                <button type="submit">Send commercial</button>
            </div>
        </form>
    )
};

export default reduxForm({form: "addCommercial"})(AddCommercial);