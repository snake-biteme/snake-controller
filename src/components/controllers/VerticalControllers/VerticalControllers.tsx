import React from 'react';
import styles from '../Controllers.module.css';
import {DOWN, LEFT, RIGHT, UP} from '../../../consts';

interface IProps {
    handleClick: (direction: string) => void,
    customSize?: {
        minHeight: string,
        minWidth: string,
    }
}

function VerticalControllers({handleClick, customSize}: IProps) {

    return (
        <div>
            <button className={`${styles.direction} ${styles.up}`} onClick={() => handleClick(UP)} style={customSize}>Up</button>
            <div className="leftRight">
                <button className={`${styles.direction} ${styles.spaceRight}`} onClick={() => handleClick(LEFT)} style={customSize}>Left
                </button>
                <button className={styles.direction} onClick={() => handleClick(RIGHT)} style={customSize}>Right</button>
            </div>
            <button className={`${styles.direction} ${styles.down}`} onClick={() => handleClick(DOWN)} style={customSize}>Down</button>
        </div>
    );
}

export default VerticalControllers;