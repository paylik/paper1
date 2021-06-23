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

    return (
        <div>
            {change ?
                <div>
                    <ChangeCommercialForm setChange={setChange} commercial={commercial}/>
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

export default Commercial;