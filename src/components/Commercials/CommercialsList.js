import React, {useState} from "react";
// import s from "./CommercialsList.module.css"
import AddCommercial from "../Forms/AddCammercial";

const CommercialsList = () => {

    const [add, setAdd] = useState(true);

    return (
        <div>
            <h3>Commercials</h3>
            {add ?
                <button onClick={() => setAdd(false)}>Add commercial</button> :
                <AddCommercial setAdd = {setAdd}/>
            }
        </div>
    )
};

export default CommercialsList;