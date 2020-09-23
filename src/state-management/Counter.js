import React , {useState} from 'react';
import {inc , dec} from './action';
import {connect} from "react-redux";

function Counter(props) {
    
    const handleInc = () => props.dispatch(inc());
    const handleDec = () => props.dispatch(dec());

    return (
        <div>
            <button onClick = {handleInc}>Increase</button>
            <p>{props.count}</p>
            <button onClick = {handleDec}>Decrease</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    const count = state.count;
    return {count};
}

export default connect (mapStateToProps)(Counter);
