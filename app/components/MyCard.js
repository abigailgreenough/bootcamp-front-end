"use client";
import { useEffect, useState } from "react";

import classes from "./my-card-styles.module.css";
import Link from 'next/link';

function MyCard(props) {

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>{props.title}</h2>
      <p className={classes.text}>{props.text}</p>
      <Link href="/DataEntry"><button className={classes.button}>{props.button1Text}</button></Link>
      <Link href="/Quiz"><button className={classes.button}>{props.button2Text}</button></Link>
    </div>
  );
}

export default MyCard;