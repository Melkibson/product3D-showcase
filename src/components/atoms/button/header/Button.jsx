import React from 'react'
import state from "../../../../store/index.js";
import {useSnapshot} from "valtio";

const Button = ({ type, title, styles, handleClick}) => {
    const snap = useSnapshot(state);
    const generateStyles = (type) => {
        if(type === 'filled') {
            return {
                backgroundColor: snap.color,
                color: snap.textColor,
            }
        }
    }
    return (
        <button
            type={type}
            className={`px-2 py-1.5 flex-1 rounded-md ${styles}`}
            style={generateStyles(type)}
            onClick={handleClick}
        >
            {title}
        </button>
    );
}

export default Button
