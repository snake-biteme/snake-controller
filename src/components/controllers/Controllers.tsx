import React from 'react';
import {motionHandler} from "../../services/apiClientAppSync";
import {defColor, playerId, screenId} from "../../CONSTS";

function Controllers() {
    const UP = 'UP';
    const DOWN = 'DOWN';
    const LEFT = 'LEFT';
    const RIGHT = 'RIGHT';

    function handleClick(direction: string) {
        motionHandler(screenId, playerId, defColor, 'Hello', direction);
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