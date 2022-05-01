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
            <button className={`${styles.direction} ${styles.up}`} onClick={() => handleClick(UP)} style={customSize}/>
            <div className="leftRight">
                <button className={`${styles.direction} ${styles.left} ${styles.spaceRight}`} onClick={() => handleClick(LEFT)} style={customSize}/>
                <button className={`${styles.direction} ${styles.right}`} onClick={() => handleClick(RIGHT)} style={customSize}/>
            </div>
            <button className={`${styles.direction} ${styles.down}`} onClick={() => handleClick(DOWN)} style={customSize}/>
        </div>
    );
}

export default VerticalControllers;