import React from "react";
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../../utils/FormsControl";
import {maxLength, requiredField} from "../../utils/validators";
import s from "./AddForm.module.css";
import firebase from "firebase";

const maxLength50 = maxLength(50);
const maxLength100 = maxLength(100);

const AddCommercialForm = ({handleSubmit, reset, setAdd}) => {

        const addCommercial = (values) => {

            const ref = firebase.firestore().collection('commercials');

            const newCommercial = {
                title: values.newCommercialTitle,
                description: values.newCommercialDescription,
                contacts: values.newCommercialContacts
            }

            ref.add(newCommercial)
                .then((commercial) => {
                    console.log("You add new commercial with ID: ", commercial.id);
                })
                .catch((error) => {
                    console.log("Error adding commercial: ", error)
                })
            reset();
            setAdd(true);
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
                    <button className="btn btn-outline-success" type="submit">Send commercial</button>
                    <button className="btn btn-outline-danger" onClick={() => setAdd(true)}>Cancel</button>
                </div>
            </form>
        )
    }
;

export default reduxForm({form: "addCommercial"})(AddCommercialForm);