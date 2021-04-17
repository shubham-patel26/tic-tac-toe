import React,{Component} from 'react';

const square=(props)=>{
    return (
        <button className="square" 
        onClick={() => props.onClick()}
        >
            {props.value}
        </button>
    )
    
}

export default Square;