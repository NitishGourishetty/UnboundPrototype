import React, {useState} from "react";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import './Meditation.css'
import {Container} from "@material-ui/core";




const Meditation = () => {
    const [value, onChange] = useState(new Date());

    return (
        <Container >
            <h1 style={{fontWeight:"bold", textAlign: "center"}} className="pt-3">Meditate-Keep track of your meditation!</h1>
            <div className="mt-3">
                <Calendar className="Calendar"
                          onChange={onChange}
                          value={value}
                />
            </div>
        </Container>
    );

}

export default Meditation;


