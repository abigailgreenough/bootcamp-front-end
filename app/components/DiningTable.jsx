
'use client'
import { useEffect, useState } from "react"
import classes from "./dining-table-styles.module.css"

function DiningTable() {

    const [diningEntries, setDiningEntries] = useState([])

    async function getAllDiningEntries() {
 
        const res = await fetch("http://localhost:8080/dataentry", {
            method: "GET",
        })

        const resJSON = await res.json()
        setDiningEntries(resJSON)
    }

    useEffect(() => {
        getAllDiningEntries()
    }, [])

    return (
        <div>
            <h2>Dining Entries</h2>
            <button onClick = {getAllDiningEntries}>
                Reload
            </button>
            <br/>
            <br/>
            <table className={classes.table}>
                <tbody >
                <tr className = {classes.row}>
                    <th>Dining Hall</th>
                    <th>Swipes</th>
                    <th>Flex Points</th>
                </tr>
            {
                diningEntries.map((entry) => 
                    <tr key={entry.id} className={classes.row}>
                        <td>{entry.diningHall}</td>
                        <td>{entry.swipes}</td>
                        <td>{entry.flexPoints}</td>
                    </tr>
                )
            }
                </tbody>
            </table>
        </div>
    )
}
export default DiningTable;
