import React from 'react';
import {motionHandler} from "../../services/apiClientAppSync";
import {defColor, playerId, screenId} from "../../CONSTS";

function Controllers() {
    const UP = 1;
    const DOWN = 2;
    const LEFT = 3;
    const RIGHT = 4;

    function handleClick(direction: number) {
        motionHandler(screenId, playerId, defColor, direction);
    }

    return (
        <div>
            <button onClick={() => handleClick(UP)}>Up</button>
            <div className="leftRight">
                <button onClick={() => handleClick(LEFT)}>Left</button>
                <button onClick={() => handleClick(RIGHT)}>Right</button>
            </div>
            <button onClick={() => handleClick(DOWN)}>Down</button>
        </div>
    );
}

export default Controllers;