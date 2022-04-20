import React, {useState} from 'react';
import {motionHandler} from "../../services/apiClientAppSync";
import {defColor, playerId, screenId} from "../../CONSTS";

interface IProps {
    showControls: Function,
    setName: Function,
    name: string,
    setColor: Function,
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
        <form onSubmit={handleSubmit}>
            <input name="name" type="text" value={name} placeholder="Enter your name..." onChange={(event) => setName(event.target.value)}/>
            <input name="color" type="color" value={color} placeholder="Choose your color..." onChange={(event) => setColor(event.target.value)}/>
            <button type="submit">Start</button>
        </form>
    );
}

export default InitialScreen;