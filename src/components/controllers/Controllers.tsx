import React from 'react';
import {motionHandler} from '../../services/apiClientAppSync';
import {playerId, screenId} from '../../CONSTS';
import styles from './Controllers.module.css';

interface IProps {
    name: string,
    color: string
}

function Controllers({name, color}: IProps) {
    const UP = 'UP';
    const DOWN = 'DOWN';
    const LEFT = 'LEFT';
    const RIGHT = 'RIGHT';

    function handleClick(direction: string) {
        motionHandler(screenId, playerId, color, name, direction);
    }

    return (
        <div>
            <button className={styles.direction} onClick={() => handleClick(UP)}>Up</button>
            <div className="leftRight">
                <button className={`${styles.direction} ${styles.spaceRight}`} onClick={() => handleClick(LEFT)}>Left</button>
                <button className={styles.direction} onClick={() => handleClick(RIGHT)}>Right</button>
            </div>
            <button className={styles.direction} onClick={() => handleClick(DOWN)}>Down</button>
        </div>
    );
}

export default Controllers;