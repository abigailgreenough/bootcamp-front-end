import classes from "./my-quiz-styles.module.css";
import Link from 'next/link';

export default function WhatDiningHallAreYou(props){
    return(
        <div>
            <h1 className={classes.question}>{props.question}</h1>
            <Link href="/Rat"><button className={classes.button}>{props.button1Text}</button></Link>
            <p></p>
            <Link href="/Ant"><button className={classes.button}>{props.button2Text}</button></Link>
            <p></p>
            <Link href="/Poodle"><button className={classes.button}>{props.button3Text}</button></Link>
            <p></p>
            <Link href="/Horse"><button className={classes.button}>{props.button4Text}</button></Link>
            <p></p>
            <Link href="/Skunk"><button className={classes.button}>{props.button5Text}</button></Link>
            <p></p>
            <Link href="/Raccoon"><button className={classes.button}>{props.button6Text}</button></Link>
            <p></p>
            <Link href="/Parrot"><button className={classes.button}>{props.button7Text}</button></Link>
            
        </div>
    )

}