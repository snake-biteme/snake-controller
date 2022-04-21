import React, { Dispatch, SetStateAction} from 'react';
import {motionHandler} from '../../services/apiClientAppSync';
import {playerId, screenId} from '../../CONSTS';
import styles from './InitialScreen.module.css';

interface IProps {
    // setState hook types: https://stackoverflow.com/a/56028976/18631517
    showControls: Dispatch<SetStateAction<boolean>>,
    setName: Dispatch<SetStateAction<string>>,
    name: string,
    setColor: Dispatch<SetStateAction<string>>,
    color:string,
}

function InitialScreen({showControls, setName, name, setColor, color}: IProps) {


    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        // console.log(event.target)
        showControls(true);
        motionHandler(screenId, playerId, color, name);
    }

    return (
        <form className={styles.startForm} onSubmit={handleSubmit}>
            <input className={`${styles.input} ${styles.name}`} name="name" type="text" value={name} placeholder="Enter your name..." onChange={(event) => setName(event.target.value)}/>
            <input className={`${styles.input} ${styles.color}`} name="color" type="color" value={color} placeholder="Choose your color..." onChange={(event) => setColor(event.target.value)}/>
            <button className={`${styles.input} ${styles.submitButton}`} type="submit">Start</button>
        </form>
    );
}

export default InitialScreen;