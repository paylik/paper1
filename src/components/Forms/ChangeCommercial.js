import React from "react";
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../../utils/FormsControl";
import {maxLength, requiredField} from "../../utils/validators";
import s from "./AddForm.module.css";
import firebase from "firebase";

const maxLength50 = maxLength(50);
const maxLength100 = maxLength(100);

const ChangeCommercialForm = ({handleSubmit, commercial, setChange}) => {

    const changeCommercial = (values) => {
        const id = commercial.id;
        const ref = firebase.firestore().collection('commercials');

        const newCommercial = {
            title: values.newCommercialTitle,
            description: values.newCommercialDescription,
            contacts: values.newCommercialContacts
        };

        console.log(newCommercial)

        ref.doc(id).set(newCommercial)
            .then((commercial) => {
                console.log("You change commercial with ID: ", commercial.id);
            })
            .catch((error) => {
                console.log("Error adding commercial: ", error)
            })
        setChange(false);
    };

    return (

            <form onSubmit={handleSubmit(changeCommercial)}>
                <div>
                    <div>{commercial.title}</div>
                    <Field
                        component={TextArea}
                        name={commercial.title}
                        validate={[requiredField, maxLength50]}
                        type="text"
                        className={`${s.addForm} ${s.title}`}
                    />
                    <Field
                        component={TextArea}
                        name="newCommercialDescription"
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
                    <button type="submit">Change commercial</button>
                    <button onClick={() => setChange(false)}>Cancel</button>
                </div>
            </form>
        )
    }
;

export default reduxForm({form: "changeCommercial"})(ChangeCommercialForm);