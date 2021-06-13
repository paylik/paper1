import React from "react";
import s from "./FormsControl.module.css"

export const TextArea = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={s.formsControl + " " + (hasError? s.error : "")}>
            <div>
                <textarea {...props} {...input} />
            </div>
            { hasError && <span>{meta.error}</span> }
        </div>
    )
}
