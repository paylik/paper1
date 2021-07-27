import React, {useCallback, useEffect, useState} from "react";
import s from "./CommercialsList.module.css"
import firebase from "firebase";
import Commercial from "./Commercial/Commercial";
import AddCommercialForm from "../Forms/AddCammercial";

const CommercialsList = () => {

    const [add, setAdd] = useState(true);
    const [loading, setLoading] = useState(false);
    const [commercials, setCommercials] = useState([])

    const getCommercials = useCallback(() => {
        const ref = firebase.firestore().collection('commercials');
        setLoading(true);
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push({...doc.data(), id: doc.id})
            });
            setCommercials(items);
            setLoading(false);
        })

    }, [])

    useEffect(() => {
        getCommercials()
    }, [getCommercials])

    const commercialsList = commercials.map(c => <Commercial
        key={c.id} commercial={c}/>)

    return (
        <div className={s.commercials}>
            <h3>Commercials</h3>
            {add ?
                <button className="btn btn-outline-secondary" onClick={() => setAdd(false)}>Add commercial</button> :
                <AddCommercialForm setAdd={setAdd}/>
            }
            {loading ?
                (<div>Loading...</div>) :
                (<div>
                    {commercialsList}
                </div>)
            }
        </div>
    )
};

export default CommercialsList;