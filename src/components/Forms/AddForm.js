import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLength, requiredField} from "../../utils/validators";
import {TextArea} from "../../utils/FormsControl";
import s from "./AddForm.module.css"

const maxLength100 = maxLength(100);
const maxLength500 = maxLength(500);

const Form = (props) => {

    return (
        <form onSubmit={[props.handleSubmit, console.log("values")]}>
            <div >
                <Field
                    component={TextArea}
                    name="newArticleTitle"
                    placeholder="Title"
                    validate = {[requiredField, maxLength100]}
                    className={`${s.addForm} ${s.title}`}
                />
                <Field
                    component={TextArea}
                    name="newArticleContent"
                    placeholder="Content"
                    validate = {[requiredField, maxLength500]}
                    className={s.addForm}
                    rows="5"
                />
            </div>
            <div>
                <button> Send</button>
            </div>
        </form>
    )
}

const AddForm = reduxForm({form: "dialogAddForm"})(Form)

export default AddForm;
