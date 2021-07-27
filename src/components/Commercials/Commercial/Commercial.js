import React, {useState} from "react";
import firebase from "firebase";
import ChangeCommercialForm from "../../Forms/ChangeCommercial";
// import s from "./Commercial.module.css"

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
    };

    const initial = {
        newCommercialTitle: commercial.title,
        newCommercialDescription:commercial.description,
        newCommercialContacts: commercial.contacts
    }
    return (
        <div>
            {change ?
                <div>
                    <ChangeCommercialForm setChange={setChange} commercial={commercial} initialValues={initial}/>
                </div> :
                <div>
                    <h4>{commercial.title}</h4>
                    <div>{commercial.description}</div>
                    <div>{commercial.contacts}</div>
                    <button className="btn btn-outline-danger" onClick={() => { if (window.confirm("Do you really want to delete the entry?")){deleteCommercial()}}} >Delete</button>
                    <button className="btn btn-outline-success" onClick={() => setChange(true)}>Change</button>
                </div>
            }
            <hr/>
        </div>
    )
}

export default Commercial;