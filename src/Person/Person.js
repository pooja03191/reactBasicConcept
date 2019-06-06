import React from 'react'
import classes from './Person.module.css'

const person = (props) => {
    let rnd = Math.random()
    if (rnd > 0.9) {
        throw new Error('Something went wrong')
    }
    return(
        <div className = {classes.Person}>
            <p onClick = {props.click} >I am {props.name} and I am {props.age} years old.</p>
            <p>{props.children}</p>
            <input type = "text" onChange = {props.changename} value = {props.name}/>
        </div>
    )
}

export default person