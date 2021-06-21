import React, {useState} from "react";
import firebase from "firebase";
import {TextArea} from "../../../utils/FormsControl";
import {maxLength, requiredField} from "../../../utils/validators";
import s from "../../Forms/AddForm.module.css";
import {reduxForm, Field} from "redux-form";
// import s from "./Commercial.module.css"

const maxLength50 = maxLength(50);
const maxLength100 = maxLength(100);

const Commercial = ({commercial, handleSubmit}) => {

    const [change, setChange] = useState(false)

    const deleteCommercial = () => {
        const id = commercial.id;
        const ref = firebase.firestore().collection('commercials');
        ref.doc(id).delete()
            .then(() => {
                console.log("Commercial deleted!")
            }).catch((error) => {
            console.error("Error: ", error)
        })
    }

    const changeCommercial = () => {
        // const id = commercial.id;
        // const ref = firebase.firestore().collection('commercials');
    }

    return (
        <div>
            {change ?
                <div>
                    <form onSubmit={handleSubmit(changeCommercial)}>
                        <Field
                            component={TextArea}
                            name="newCommercialTitle"
                            validate={[requiredField, maxLength50]}
                            className={`${s.addForm} ${s.title}`}
                            value={commercial.title}
                        />
                        <Field
                            component={TextArea}
                            name="newCommercialDescription"
                            validate={[requiredField, maxLength100]}
                            className={s.addForm}
                            rows="5"
                        />
                        <Field
                            component={TextArea}
                            name="newCommercialContacts"
                            validate={[requiredField, maxLength100]}
                            className={s.addForm}
                        />
                        <div>
                            <button type="submit">Change commercial</button>
                            <button onClick={() => setChange(false)}>Cancel</button>
                        </div>
                    </form>
                </div> :
                <div>
                    <h4>{commercial.title}</h4>
                    <div>{commercial.description}</div>
                    <div>{commercial.contacts}</div>
                    <button onClick={() => deleteCommercial()}>Delete</button>
                    <button onClick={() => setChange(true)}>Change</button>
                </div>
            }
            <hr/>
        </div>
    )
}

export default reduxForm({form: "ChangeForm"})(Commercial);