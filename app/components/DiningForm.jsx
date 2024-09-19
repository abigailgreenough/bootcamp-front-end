'use client'
import { useState } from "react"
import classes from "./dining-form-styles.module.css";
<new></new>

function DiningForm(){
   
   async function onSubmit(){
        const newDiningEntry = {
            diningHall,
            swipes,
            flexPoints,
        }
        const res = await fetch ("http://localhost:8080/dataentry", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newDiningEntry)
        })

    }

    const [diningHall, setDiningHall] = useState("")
    const [swipes, setSwipes] = useState("")
    const [flexPoints, setFlexPoints] = useState("")

    return (
        <div>
            <h3>Add new dining entry</h3>
            <button onClick={onSubmit}>Submit</button>
            <h4></h4>
            <div className = {classes.mainForm}>
                <div>
                    <label htmlFor="diningHall">Dining Hall: </label>
                    <input 
                    name="diningHall"
                    value={diningHall}
                    onChange = {(event) => setDiningHall(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="swipes">Swipes: </label>
                    <input 
                    value={swipes}
                    onChange = {(event) => setSwipes(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="flexPoints">Flex Points: </label>
                    <input 
                    value={flexPoints}
                    onChange = {(event) => setFlexPoints(event.target.value)}
                    />
                </div>
            </div>
        </div>
    )
    }
    
    export default DiningForm;